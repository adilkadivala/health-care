import prisma from '../config/db';
import { Prisma, type AppointmentStatus } from '../generated/prisma';

export class PatientNotFoundError extends Error {
  constructor() {
    super('Patient profile not found');
    this.name = 'PatientNotFoundError';
  }
}

async function requirePatient(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          phone: true,
        },
      },
    },
  });
  if (!patient) throw new PatientNotFoundError();
  return patient;
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function getMe(userId: string) {
  const p = await requirePatient(userId);
  return {
    user: p.user,
    patient: {
      id: p.id,
      dateOfBirth: p.dateOfBirth.toISOString(),
      bloodGroup: p.bloodGroup,
      allergies: p.allergies,
      address: p.address,
      medicalHistory: p.medicalHistory,
      preferences: p.preferences,
    },
  };
}

export async function updateMe(
  userId: string,
  body: {
    firstName?: string;
    lastName?: string;
    phone?: string | null;
    dateOfBirth?: string;
    bloodGroup?: string | null;
    allergies?: string[];
    address?: string | null;
    medicalHistory?: string | null;
    preferences?: Prisma.InputJsonValue | null;
  }
) {
  const p = await requirePatient(userId);
  const userUpdate: Prisma.UserUpdateInput = {};
  const patientUpdate: Prisma.PatientUpdateInput = {};

  if (body.firstName !== undefined) userUpdate.firstName = body.firstName;
  if (body.lastName !== undefined) userUpdate.lastName = body.lastName;
  if (body.phone !== undefined) userUpdate.phone = body.phone;
  if (body.dateOfBirth !== undefined) patientUpdate.dateOfBirth = new Date(body.dateOfBirth);
  if (body.bloodGroup !== undefined) patientUpdate.bloodGroup = body.bloodGroup;
  if (body.allergies !== undefined) patientUpdate.allergies = body.allergies;
  if (body.address !== undefined) patientUpdate.address = body.address;
  if (body.medicalHistory !== undefined) patientUpdate.medicalHistory = body.medicalHistory;
  if (body.preferences !== undefined) {
    patientUpdate.preferences = body.preferences ?? Prisma.JsonNull;
  }

  const ops: Prisma.PrismaPromise<unknown>[] = [];
  if (Object.keys(userUpdate).length > 0) {
    ops.push(prisma.user.update({ where: { id: userId }, data: userUpdate }));
  }
  if (Object.keys(patientUpdate).length > 0) {
    ops.push(prisma.patient.update({ where: { id: p.id }, data: patientUpdate }));
  }
  if (ops.length > 0) await prisma.$transaction(ops);
  return getMe(userId);
}

export async function getOverview(userId: string) {
  const p = await requirePatient(userId);
  const today = startOfToday();
  const [appointments, reports, pendingRx] = await Promise.all([
    prisma.appointment.findMany({
      where: { patientId: p.id },
      orderBy: { startTime: 'asc' },
      take: 30,
      include: { doctor: { include: { user: { select: { firstName: true, lastName: true } } } } },
    }),
    prisma.labReport.findMany({
      where: { patientId: p.id },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { doctor: { include: { user: { select: { firstName: true, lastName: true } } } } },
    }),
    prisma.prescription.count({ where: { patientId: p.id, status: 'PENDING' } }),
  ]);

  const nextAppointment =
    appointments.find((a) => a.startTime >= today && a.status !== 'CANCELLED') ?? null;

  return {
    metrics: {
      activePrescriptions: pendingRx,
      reportCount: reports.length,
      upcomingAppointments: appointments.filter((a) => a.startTime >= today).length,
      profileCompletion: p.preferences ? 100 : 85,
    },
    nextAppointment: nextAppointment
      ? {
          id: nextAppointment.id,
          startTime: nextAppointment.startTime.toISOString(),
          doctorName: `Dr. ${nextAppointment.doctor.user.firstName} ${nextAppointment.doctor.user.lastName}`,
          department: nextAppointment.doctor.department,
          status: nextAppointment.status,
        }
      : null,
    appointments: appointments.map((a) => ({
      id: a.id,
      startTime: a.startTime.toISOString(),
      status: a.status,
      doctorName: `Dr. ${a.doctor.user.firstName} ${a.doctor.user.lastName}`,
      department: a.doctor.department,
    })),
    reminders: reports
      .filter((r) => r.status !== 'REVIEWED')
      .slice(0, 3)
      .map((r) => ({
        id: r.id,
        title: `${r.title} report update`,
        note: r.summary ?? r.resultNotes ?? 'New lab status available',
        due: r.createdAt.toISOString(),
      })),
  };
}

export async function listAppointments(userId: string) {
  const p = await requirePatient(userId);
  const rows = await prisma.appointment.findMany({
    where: { patientId: p.id },
    orderBy: { startTime: 'desc' },
    take: 100,
    include: {
      doctor: {
        include: {
          user: { select: { firstName: true, lastName: true } },
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
    department: a.doctor.department,
    doctorId: a.doctorId,
    doctorName: `Dr. ${a.doctor.user.firstName} ${a.doctor.user.lastName}`,
  }));
}

export async function createAppointment(
  userId: string,
  body: { doctorId: string; date: string; startTime: string; endTime: string; reasonForVisit?: string }
) {
  const p = await requirePatient(userId);
  const row = await prisma.appointment.create({
    data: {
      patientId: p.id,
      doctorId: body.doctorId,
      date: new Date(body.date),
      startTime: new Date(body.startTime),
      endTime: new Date(body.endTime),
      reasonForVisit: body.reasonForVisit ?? null,
    },
  });
  return {
    id: row.id,
    startTime: row.startTime.toISOString(),
    status: row.status,
  };
}

export async function patchAppointment(
  userId: string,
  id: string,
  body: { status?: AppointmentStatus; startTime?: string; endTime?: string }
) {
  const p = await requirePatient(userId);
  const exists = await prisma.appointment.findFirst({ where: { id, patientId: p.id } });
  if (!exists) throw new Error('Appointment not found');
  const updated = await prisma.appointment.update({
    where: { id },
    data: {
      ...(body.status ? { status: body.status } : {}),
      ...(body.startTime ? { startTime: new Date(body.startTime) } : {}),
      ...(body.endTime ? { endTime: new Date(body.endTime) } : {}),
    },
  });
  return { id: updated.id, status: updated.status, startTime: updated.startTime.toISOString() };
}

export async function listDoctors(userId: string, q?: string) {
  await requirePatient(userId);
  const term = q?.trim() ?? '';
  const where =
    term.length < 2
      ? {}
      : {
          OR: [
            { user: { firstName: { contains: term, mode: 'insensitive' as const } } },
            { user: { lastName: { contains: term, mode: 'insensitive' as const } } },
            { department: { contains: term, mode: 'insensitive' as const } },
            { specialization: { contains: term, mode: 'insensitive' as const } },
          ],
        };
  const rows = await prisma.doctor.findMany({
    where,
    take: 30,
    include: { user: { select: { firstName: true, lastName: true } } },
  });
  return rows.map((d) => ({
    id: d.id,
    name: `Dr. ${d.user.firstName} ${d.user.lastName}`,
    department: d.department,
    specialization: d.specialization,
  }));
}

export async function listLabReports(userId: string) {
  const p = await requirePatient(userId);
  const rows = await prisma.labReport.findMany({
    where: { patientId: p.id },
    orderBy: { createdAt: 'desc' },
    take: 100,
    include: { doctor: { include: { user: { select: { firstName: true, lastName: true } } } } },
  });
  return rows.map((r) => ({
    id: r.id,
    createdAt: r.createdAt.toISOString(),
    title: r.title,
    status: r.status,
    summary: r.summary,
    resultNotes: r.resultNotes,
    fileUrls: r.fileUrls,
    doctorName: r.doctor
      ? `Dr. ${r.doctor.user.firstName} ${r.doctor.user.lastName}`
      : 'Unassigned',
  }));
}

export async function getActivity(userId: string) {
  const p = await requirePatient(userId);
  const [appointments, reports, txns] = await Promise.all([
    prisma.appointment.findMany({
      where: { patientId: p.id },
      orderBy: { updatedAt: 'desc' },
      take: 20,
      include: { doctor: { include: { user: { select: { firstName: true, lastName: true } } } } },
    }),
    prisma.labReport.findMany({
      where: { patientId: p.id },
      orderBy: { createdAt: 'desc' },
      take: 20,
    }),
    prisma.transaction.findMany({
      where: { patientId: p.id },
      orderBy: { createdAt: 'desc' },
      take: 20,
    }),
  ]);

  const items: Array<{
    id: string;
    type: string;
    actor: string;
    title: string;
    status: string;
    time: string;
  }> = [];

  for (const a of appointments) {
    items.push({
      id: `appt-${a.id}`,
      type: 'appointment',
      actor: `Dr. ${a.doctor.user.firstName} ${a.doctor.user.lastName}`,
      title: `Appointment ${a.status.replace('_', ' ')}`,
      status: a.status,
      time: a.updatedAt.toISOString(),
    });
  }
  for (const r of reports) {
    items.push({
      id: `lab-${r.id}`,
      type: 'lab',
      actor: 'Lab Services',
      title: `${r.title} report ${r.status.replace('_', ' ')}`,
      status: r.status,
      time: r.createdAt.toISOString(),
    });
  }
  for (const t of txns) {
    items.push({
      id: `txn-${t.id}`,
      type: 'billing',
      actor: 'Billing',
      title: `${t.currency} ${t.amount.toFixed(2)} payment ${t.status}`,
      status: t.status,
      time: t.createdAt.toISOString(),
    });
  }

  items.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return { items: items.slice(0, 50) };
}

export async function getRegistration(userId: string) {
  const p = await requirePatient(userId);
  const prefs = (p.preferences ?? {}) as Record<string, unknown>;
  return {
    checklist: [
      { key: 'profile', label: 'Basic profile information', completed: Boolean(p.address && p.user.phone) },
      { key: 'insurance', label: 'Insurance details', completed: Boolean(prefs.insuranceProvider && prefs.policyNumber) },
      { key: 'emergency', label: 'Emergency contact details', completed: Boolean(prefs.emergencyName && prefs.emergencyPhone) },
      { key: 'history', label: 'Medical history declaration', completed: Boolean(p.medicalHistory) },
    ],
    intake: {
      insuranceProvider: (prefs.insuranceProvider as string) ?? '',
      policyNumber: (prefs.policyNumber as string) ?? '',
      primaryConcern: (prefs.primaryConcern as string) ?? '',
      emergencyName: (prefs.emergencyName as string) ?? '',
      emergencyPhone: (prefs.emergencyPhone as string) ?? '',
      relationship: (prefs.relationship as string) ?? '',
      medicalHistory: p.medicalHistory ?? '',
    },
  };
}

export async function saveRegistration(
  userId: string,
  body: {
    insuranceProvider?: string;
    policyNumber?: string;
    primaryConcern?: string;
    emergencyName?: string;
    emergencyPhone?: string;
    relationship?: string;
    medicalHistory?: string;
  }
) {
  const p = await requirePatient(userId);
  const existing = ((p.preferences ?? {}) as Record<string, unknown>) || {};
  const merged = {
    ...existing,
    insuranceProvider: body.insuranceProvider ?? existing.insuranceProvider ?? '',
    policyNumber: body.policyNumber ?? existing.policyNumber ?? '',
    primaryConcern: body.primaryConcern ?? existing.primaryConcern ?? '',
    emergencyName: body.emergencyName ?? existing.emergencyName ?? '',
    emergencyPhone: body.emergencyPhone ?? existing.emergencyPhone ?? '',
    relationship: body.relationship ?? existing.relationship ?? '',
  };
  await prisma.patient.update({
    where: { id: p.id },
    data: {
      preferences: merged,
      ...(body.medicalHistory !== undefined ? { medicalHistory: body.medicalHistory } : {}),
    },
  });
  return getRegistration(userId);
}
