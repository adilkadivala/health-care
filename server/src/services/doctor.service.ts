import prisma from '../config/db';
import {
  Prisma,
  type AppointmentStatus,
  type LabReportStatus,
} from '../generated/prisma';

export class DoctorNotFoundError extends Error {
  constructor() {
    super('Doctor profile not found');
    this.name = 'DoctorNotFoundError';
  }
}

async function requireDoctor(userId: string) {
  const doctor = await prisma.doctor.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          role: true,
        },
      },
    },
  });
  if (!doctor) throw new DoctorNotFoundError();
  return doctor;
}

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfToday(): Date {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d;
}

function startOfWeek(): Date {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

export async function getMe(userId: string) {
  const doctor = await requireDoctor(userId);
  return {
    doctor: {
      id: doctor.id,
      specialization: doctor.specialization,
      licenseNumber: doctor.licenseNumber,
      department: doctor.department,
      availability: doctor.availability,
      preferences: doctor.preferences,
    },
    user: doctor.user,
  };
}

export async function updateMe(
  userId: string,
  body: {
    firstName?: string;
    lastName?: string;
    phone?: string | null;
    specialization?: string;
    department?: string;
    availability?: Prisma.InputJsonValue | null;
    preferences?: Prisma.InputJsonValue | null;
  }
) {
  const doctor = await requireDoctor(userId);

  const userUpdate: Prisma.UserUpdateInput = {};
  if (body.firstName !== undefined) userUpdate.firstName = body.firstName;
  if (body.lastName !== undefined) userUpdate.lastName = body.lastName;
  if (body.phone !== undefined) userUpdate.phone = body.phone;

  const doctorUpdate: Prisma.DoctorUpdateInput = {};
  if (body.specialization !== undefined) doctorUpdate.specialization = body.specialization;
  if (body.department !== undefined) doctorUpdate.department = body.department;
  if (body.availability !== undefined) doctorUpdate.availability = body.availability ?? Prisma.JsonNull;
  if (body.preferences !== undefined) doctorUpdate.preferences = body.preferences ?? Prisma.JsonNull;

  const ops: Prisma.PrismaPromise<unknown>[] = [];
  if (Object.keys(userUpdate).length > 0) {
    ops.push(prisma.user.update({ where: { id: userId }, data: userUpdate }));
  }
  if (Object.keys(doctorUpdate).length > 0) {
    ops.push(prisma.doctor.update({ where: { id: doctor.id }, data: doctorUpdate }));
  }
  if (ops.length > 0) {
    await prisma.$transaction(ops);
  }

  return getMe(userId);
}

export async function getOverview(userId: string) {
  const doctor = await requireDoctor(userId);
  const doctorId = doctor.id;
  const dayStart = startOfToday();
  const dayEnd = endOfToday();

  const [
    appointmentsToday,
    completedToday,
    pendingLabs,
    unsignedCharts,
    todaySlots,
    priorityLabs,
  ] = await Promise.all([
    prisma.appointment.count({
      where: {
        doctorId,
        startTime: { gte: dayStart, lte: dayEnd },
      },
    }),
    prisma.appointment.count({
      where: {
        doctorId,
        status: 'COMPLETED',
        startTime: { gte: dayStart, lte: dayEnd },
      },
    }),
    prisma.labReport.count({
      where: {
        doctorId,
        status: { not: 'REVIEWED' },
      },
    }),
    prisma.medicalRecord.count({
      where: { doctorId, chartSignedAt: null },
    }),
    prisma.appointment.findMany({
      where: {
        doctorId,
        startTime: { gte: dayStart, lte: dayEnd },
      },
      orderBy: { startTime: 'asc' },
      take: 25,
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true } },
          },
        },
      },
    }),
    prisma.labReport.findMany({
      where: {
        doctorId,
        status: { in: ['PENDING_REVIEW', 'CRITICAL', 'READY'] },
      },
      orderBy: { createdAt: 'desc' },
      take: 8,
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true } },
          },
        },
      },
    }),
  ]);

  return {
    metrics: {
      appointmentsToday,
      consultationsClosed: completedToday,
      pendingReports: pendingLabs,
      unsignedCharts,
    },
    appointments: todaySlots.map((a) => ({
      id: a.id,
      time: a.startTime.toISOString(),
      endTime: a.endTime.toISOString(),
      patientName: `${a.patient.user.firstName} ${a.patient.user.lastName}`,
      reasonForVisit: a.reasonForVisit,
      status: a.status,
      notes: a.notes,
    })),
    labReports: priorityLabs.map((r) => ({
      id: r.id,
      patientName: `${r.patient.user.firstName} ${r.patient.user.lastName}`,
      title: r.title,
      status: r.status,
      summary: r.summary,
      resultNotes: r.resultNotes,
      createdAt: r.createdAt.toISOString(),
    })),
  };
}

export async function listAppointments(
  userId: string,
  query: { from?: string; to?: string; status?: AppointmentStatus }
) {
  const doctor = await requireDoctor(userId);
  const where: Prisma.AppointmentWhereInput = { doctorId: doctor.id };
  if (query.status) where.status = query.status;
  if (query.from || query.to) {
    where.startTime = {};
    if (query.from) where.startTime.gte = new Date(query.from);
    if (query.to) where.startTime.lte = new Date(query.to);
  } else {
    const dayStart = startOfToday();
    const dayEnd = endOfToday();
    where.startTime = { gte: dayStart, lte: dayEnd };
  }

  const rows = await prisma.appointment.findMany({
    where,
    orderBy: { startTime: 'asc' },
    take: 100,
    include: {
      patient: {
        include: {
          user: { select: { firstName: true, lastName: true, email: true, phone: true } },
        },
      },
    },
  });

  return rows.map((a) => ({
    id: a.id,
    startTime: a.startTime.toISOString(),
    endTime: a.endTime.toISOString(),
    status: a.status,
    reasonForVisit: a.reasonForVisit,
    notes: a.notes,
    patient: {
      id: a.patient.id,
      name: `${a.patient.user.firstName} ${a.patient.user.lastName}`,
      email: a.patient.user.email,
      phone: a.patient.user.phone,
    },
  }));
}

export async function createAppointment(
  userId: string,
  body: {
    patientId: string;
    date: string;
    startTime: string;
    endTime: string;
    reasonForVisit?: string;
  }
) {
  const doctor = await requireDoctor(userId);
  const date = new Date(body.date);
  const start = new Date(body.startTime);
  const end = new Date(body.endTime);

  const appt = await prisma.appointment.create({
    data: {
      patientId: body.patientId,
      doctorId: doctor.id,
      date,
      startTime: start,
      endTime: end,
      reasonForVisit: body.reasonForVisit ?? null,
    },
    include: {
      patient: {
        include: {
          user: { select: { firstName: true, lastName: true } },
        },
      },
    },
  });

  return {
    id: appt.id,
    startTime: appt.startTime.toISOString(),
    endTime: appt.endTime.toISOString(),
    status: appt.status,
    patientName: `${appt.patient.user.firstName} ${appt.patient.user.lastName}`,
  };
}

export async function updateAppointment(
  userId: string,
  appointmentId: string,
  body: { status?: AppointmentStatus; notes?: string | null; reasonForVisit?: string | null }
) {
  const doctor = await requireDoctor(userId);
  const existing = await prisma.appointment.findFirst({
    where: { id: appointmentId, doctorId: doctor.id },
  });
  if (!existing) throw new Error('Appointment not found');

  const updated = await prisma.appointment.update({
    where: { id: appointmentId },
    data: {
      ...(body.status !== undefined ? { status: body.status } : {}),
      ...(body.notes !== undefined ? { notes: body.notes } : {}),
      ...(body.reasonForVisit !== undefined ? { reasonForVisit: body.reasonForVisit } : {}),
    },
  });

  return {
    id: updated.id,
    status: updated.status,
    notes: updated.notes,
    startTime: updated.startTime.toISOString(),
  };
}

export async function searchPatients(userId: string, q: string) {
  await requireDoctor(userId);
  const term = q.trim();
  if (term.length < 2) return [];

  const patients = await prisma.patient.findMany({
    where: {
      OR: [
        { user: { firstName: { contains: term, mode: 'insensitive' } } },
        { user: { lastName: { contains: term, mode: 'insensitive' } } },
        { user: { email: { contains: term, mode: 'insensitive' } } },
        { user: { phone: { contains: term, mode: 'insensitive' } } },
      ],
    },
    take: 20,
    include: {
      user: { select: { firstName: true, lastName: true, email: true, phone: true } },
    },
  });

  return patients.map((p) => ({
    id: p.id,
    name: `${p.user.firstName} ${p.user.lastName}`,
    email: p.user.email,
    phone: p.user.phone,
    dateOfBirth: p.dateOfBirth.toISOString(),
  }));
}

export async function listPatients(userId: string) {
  await requireDoctor(userId);
  const rows = await prisma.patient.findMany({
    orderBy: { user: { firstName: 'asc' } },
    take: 200,
    include: { user: { select: { firstName: true, lastName: true, email: true, phone: true } } },
  });
  return rows.map((p) => ({
    id: p.id,
    name: `${p.user.firstName} ${p.user.lastName}`,
    email: p.user.email,
    phone: p.user.phone,
    dateOfBirth: p.dateOfBirth.toISOString(),
  }));
}

export async function listLabReports(userId: string) {
  const doctor = await requireDoctor(userId);
  const rows = await prisma.labReport.findMany({
    where: { doctorId: doctor.id },
    orderBy: { createdAt: 'desc' },
    take: 100,
    include: {
      patient: {
        include: {
          user: { select: { firstName: true, lastName: true } },
        },
      },
    },
  });

  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    summary: r.summary,
    status: r.status,
    resultNotes: r.resultNotes,
    fileUrls: r.fileUrls,
    orderedOn: r.createdAt.toISOString(),
    reviewedAt: r.reviewedAt?.toISOString() ?? null,
    patientName: `${r.patient.user.firstName} ${r.patient.user.lastName}`,
  }));
}

export async function updateLabReport(
  userId: string,
  reportId: string,
  body: { status?: LabReportStatus; resultNotes?: string | null }
) {
  const doctor = await requireDoctor(userId);
  const row = await prisma.labReport.findFirst({
    where: { id: reportId, doctorId: doctor.id },
  });
  if (!row) throw new Error('Lab report not found');

  const status = body.status ?? row.status;
  const reviewedAt =
    status === 'REVIEWED' && row.status !== 'REVIEWED' ? new Date() : row.reviewedAt;

  const updated = await prisma.labReport.update({
    where: { id: reportId },
    data: {
      ...(body.status !== undefined ? { status: body.status } : {}),
      ...(body.resultNotes !== undefined ? { resultNotes: body.resultNotes } : {}),
      reviewedAt,
    },
  });

  return {
    id: updated.id,
    status: updated.status,
    reviewedAt: updated.reviewedAt?.toISOString() ?? null,
  };
}

export async function getBilling(userId: string) {
  const doctor = await requireDoctor(userId);
  const weekStart = startOfWeek();

  const patientIds = await prisma.appointment.findMany({
    where: { doctorId: doctor.id },
    select: { patientId: true },
    distinct: ['patientId'],
  });
  const ids = patientIds.map((p) => p.patientId);
  if (ids.length === 0) {
    return {
      summary: { weekTotal: 0, pendingClaims: 0, unsignedCharts: 0 },
      charges: [] as Array<{
        id: string;
        patientName: string;
        amount: number;
        status: string;
        date: string;
        description: string | null;
      }>,
    };
  }

  const [transactions, unsignedCount, weekPaid] = await Promise.all([
    prisma.transaction.findMany({
      where: { patientId: { in: ids } },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true } },
          },
        },
      },
    }),
    prisma.medicalRecord.count({
      where: { doctorId: doctor.id, chartSignedAt: null },
    }),
    prisma.transaction.aggregate({
      where: {
        patientId: { in: ids },
        status: 'PAID',
        createdAt: { gte: weekStart },
      },
      _sum: { amount: true },
    }),
  ]);

  const pendingClaims = transactions.filter((t) => t.status === 'PENDING').length;

  return {
    summary: {
      weekTotal: weekPaid._sum.amount ?? 0,
      pendingClaims,
      unsignedCharts: unsignedCount,
    },
    charges: transactions.map((t) => ({
      id: t.id,
      patientName: `${t.patient.user.firstName} ${t.patient.user.lastName}`,
      amount: t.amount,
      status: t.status,
      date: t.createdAt.toISOString(),
      description: t.description,
    })),
  };
}

export async function listPendingSignatures(userId: string) {
  const doctor = await requireDoctor(userId);
  const records = await prisma.medicalRecord.findMany({
    where: { doctorId: doctor.id, chartSignedAt: null },
    orderBy: { updatedAt: 'desc' },
    take: 50,
    include: {
      patient: {
        include: {
          user: { select: { firstName: true, lastName: true } },
        },
      },
    },
  });

  return records.map((r) => ({
    id: r.id,
    patientName: `${r.patient.user.firstName} ${r.patient.user.lastName}`,
    diagnosis: r.diagnosis,
    updatedAt: r.updatedAt.toISOString(),
    appointmentId: r.appointmentId,
  }));
}

export async function signMedicalRecord(userId: string, recordId: string) {
  const doctor = await requireDoctor(userId);
  const row = await prisma.medicalRecord.findFirst({
    where: { id: recordId, doctorId: doctor.id },
  });
  if (!row) throw new Error('Medical record not found');

  const updated = await prisma.medicalRecord.update({
    where: { id: recordId },
    data: { chartSignedAt: new Date() },
  });

  return { id: updated.id, chartSignedAt: updated.chartSignedAt?.toISOString() ?? null };
}

export async function getActivity(userId: string) {
  const doctor = await requireDoctor(userId);
  const doctorId = doctor.id;

  const [appointments, records, labs, rx] = await Promise.all([
    prisma.appointment.findMany({
      where: { doctorId },
      orderBy: { updatedAt: 'desc' },
      take: 15,
      include: {
        patient: { include: { user: { select: { firstName: true, lastName: true } } } },
      },
    }),
    prisma.medicalRecord.findMany({
      where: { doctorId },
      orderBy: { createdAt: 'desc' },
      take: 15,
      include: {
        patient: { include: { user: { select: { firstName: true, lastName: true } } } },
      },
    }),
    prisma.labReport.findMany({
      where: { doctorId },
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: {
        patient: { include: { user: { select: { firstName: true, lastName: true } } } },
      },
    }),
    prisma.prescription.findMany({
      where: { doctorId },
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: {
        patient: { include: { user: { select: { firstName: true, lastName: true } } } },
      },
    }),
  ]);

  type Item = {
    id: string;
    title: string;
    description: string;
    time: string;
    lane: string;
    status: string;
  };

  const items: Item[] = [];

  for (const a of appointments) {
    items.push({
      id: `appt-${a.id}`,
      title: `Appointment ${a.status.replace('_', ' ')} — ${a.patient.user.firstName} ${a.patient.user.lastName}`,
      description: a.reasonForVisit ?? 'Visit update',
      time: a.updatedAt.toISOString(),
      lane: 'Appointment',
      status: a.status,
    });
  }
  for (const r of records) {
    items.push({
      id: `record-${r.id}`,
      title: `Chart updated — ${r.patient.user.firstName} ${r.patient.user.lastName}`,
      description: r.diagnosis.slice(0, 120) + (r.diagnosis.length > 120 ? '…' : ''),
      time: r.createdAt.toISOString(),
      lane: 'Clinical',
      status: r.chartSignedAt ? 'Signed' : 'Draft',
    });
  }
  for (const l of labs) {
    items.push({
      id: `lab-${l.id}`,
      title: `Lab: ${l.title} — ${l.patient.user.firstName} ${l.patient.user.lastName}`,
      description: l.summary ?? l.resultNotes ?? 'Lab report',
      time: l.createdAt.toISOString(),
      lane: 'Lab',
      status: l.status,
    });
  }
  for (const p of rx) {
    items.push({
      id: `rx-${p.id}`,
      title: `Prescription ${p.status} — ${p.patient.user.firstName} ${p.patient.user.lastName}`,
      description: p.notes ?? 'Prescription activity',
      time: p.createdAt.toISOString(),
      lane: 'Pharmacy',
      status: p.status,
    });
  }

  items.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return { items: items.slice(0, 40) };
}
