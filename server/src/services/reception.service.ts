import prisma from '../config/db';
import { Prisma, type AppointmentStatus, type TransactionStatus } from '../generated/prisma';

export class ReceptionistNotFoundError extends Error {
  constructor() {
    super('Receptionist profile not found');
    this.name = 'ReceptionistNotFoundError';
  }
}

async function requireReceptionist(userId: string) {
  const rec = await prisma.receptionist.findUnique({
    where: { userId },
    include: { user: { select: { id: true, email: true, firstName: true, lastName: true, phone: true, role: true } } },
  });
  if (!rec) throw new ReceptionistNotFoundError();
  return rec;
}

function asObject(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfToday() {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d;
}

export async function getMe(userId: string) {
  const rec = await requireReceptionist(userId);
  return {
    user: rec.user,
    receptionist: {
      id: rec.id,
      shiftHours: rec.shiftHours,
      deskNumber: rec.deskNumber,
      preferences: rec.preferences,
    },
  };
}

export async function patchMe(
  userId: string,
  body: { phone?: string | null; shiftHours?: string | null; deskNumber?: string | null; preferences?: Prisma.InputJsonValue | null }
) {
  const rec = await requireReceptionist(userId);
  const userUpdate: Prisma.UserUpdateInput = {};
  const recUpdate: Prisma.ReceptionistUpdateInput = {};
  if (body.phone !== undefined) userUpdate.phone = body.phone;
  if (body.shiftHours !== undefined) recUpdate.shiftHours = body.shiftHours;
  if (body.deskNumber !== undefined) recUpdate.deskNumber = body.deskNumber;
  if (body.preferences !== undefined) recUpdate.preferences = body.preferences ?? Prisma.JsonNull;
  const ops: Prisma.PrismaPromise<unknown>[] = [];
  if (Object.keys(userUpdate).length) ops.push(prisma.user.update({ where: { id: userId }, data: userUpdate }));
  if (Object.keys(recUpdate).length) ops.push(prisma.receptionist.update({ where: { id: rec.id }, data: recUpdate }));
  if (ops.length) await prisma.$transaction(ops);
  return getMe(userId);
}

export async function getOverview(userId: string) {
  await requireReceptionist(userId);
  const todayStart = startOfToday();
  const todayEnd = endOfToday();
  const [waiting, apptsToday, walkinsToday, newRegsToday, recentActivity] = await Promise.all([
    prisma.walkInQueue.count({ where: { status: { in: ['WAITING', 'IN_TRIAGE'] } } }),
    prisma.appointment.count({ where: { startTime: { gte: todayStart, lte: todayEnd } } }),
    prisma.walkInQueue.count({ where: { checkInTime: { gte: todayStart, lte: todayEnd } } }),
    prisma.patient.count({ where: { user: { createdAt: { gte: todayStart, lte: todayEnd } } } }),
    prisma.walkInQueue.findMany({ orderBy: { checkInTime: 'desc' }, take: 10 }),
  ]);
  return {
    metrics: { waitingRoom: waiting, appointmentsToday: apptsToday, walkinsToday, newRegistrations: newRegsToday },
    activity: recentActivity.map((a) => ({
      id: a.id,
      title: `${a.patientName} walk-in`,
      time: a.checkInTime.toISOString(),
      status: a.status,
      reason: a.reason,
    })),
  };
}

export async function listAppointments(userId: string, q?: string) {
  await requireReceptionist(userId);
  const term = q?.trim();
  const rows = await prisma.appointment.findMany({
    where: term
      ? {
          OR: [
            { patient: { user: { firstName: { contains: term, mode: 'insensitive' } } } },
            { patient: { user: { lastName: { contains: term, mode: 'insensitive' } } } },
            { doctor: { user: { firstName: { contains: term, mode: 'insensitive' } } } },
            { doctor: { user: { lastName: { contains: term, mode: 'insensitive' } } } },
          ],
        }
      : undefined,
    orderBy: { startTime: 'asc' },
    take: 150,
    include: {
      patient: { include: { user: { select: { firstName: true, lastName: true } } } },
      doctor: { include: { user: { select: { firstName: true, lastName: true } } } },
    },
  });
  return rows.map((a) => ({
    id: a.id,
    patientName: `${a.patient.user.firstName} ${a.patient.user.lastName}`,
    doctorName: `Dr. ${a.doctor.user.firstName} ${a.doctor.user.lastName}`,
    department: a.doctor.department,
    startTime: a.startTime.toISOString(),
    status: a.status,
    reasonForVisit: a.reasonForVisit,
  }));
}

export async function listPatients(userId: string) {
  await requireReceptionist(userId);
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
  }));
}

export async function listDoctors(userId: string) {
  await requireReceptionist(userId);
  const rows = await prisma.doctor.findMany({
    orderBy: { user: { firstName: 'asc' } },
    take: 200,
    include: { user: { select: { firstName: true, lastName: true, email: true, phone: true } } },
  });
  return rows.map((d) => ({
    id: d.id,
    name: `Dr. ${d.user.firstName} ${d.user.lastName}`,
    department: d.department,
    specialization: d.specialization,
    email: d.user.email,
  }));
}

export async function createAppointment(
  userId: string,
  body: { patientId: string; doctorId: string; date: string; startTime: string; endTime: string; reasonForVisit?: string }
) {
  await requireReceptionist(userId);
  const row = await prisma.appointment.create({
    data: {
      patientId: body.patientId,
      doctorId: body.doctorId,
      date: new Date(body.date),
      startTime: new Date(body.startTime),
      endTime: new Date(body.endTime),
      reasonForVisit: body.reasonForVisit ?? null,
    },
  });
  return { id: row.id, status: row.status, startTime: row.startTime.toISOString() };
}

export async function patchAppointment(userId: string, id: string, body: { status?: AppointmentStatus }) {
  await requireReceptionist(userId);
  const exists = await prisma.appointment.findUnique({ where: { id } });
  if (!exists) throw new Error('Appointment not found');
  const updated = await prisma.appointment.update({
    where: { id },
    data: { ...(body.status ? { status: body.status } : {}) },
  });
  return { id: updated.id, status: updated.status };
}

export async function listWalkIns(userId: string, q?: string) {
  await requireReceptionist(userId);
  const term = q?.trim();
  const rows = await prisma.walkInQueue.findMany({
    where: term
      ? {
          OR: [
            { patientName: { contains: term, mode: 'insensitive' } },
            { reason: { contains: term, mode: 'insensitive' } },
            { phoneNumber: { contains: term, mode: 'insensitive' } },
          ],
        }
      : undefined,
    orderBy: { checkInTime: 'asc' },
    take: 200,
  });
  return rows.map((w) => ({
    id: w.id,
    patientName: w.patientName,
    phoneNumber: w.phoneNumber,
    reason: w.reason,
    priority: w.priority,
    status: w.status,
    assignedTo: w.assignedTo,
    checkInTime: w.checkInTime.toISOString(),
    checkOutTime: w.checkOutTime?.toISOString() ?? null,
  }));
}

export async function createWalkIn(
  userId: string,
  body: { patientName: string; phoneNumber?: string; reason: string; priority?: number; assignedTo?: string }
) {
  await requireReceptionist(userId);
  const created = await prisma.walkInQueue.create({
    data: {
      patientName: body.patientName,
      phoneNumber: body.phoneNumber ?? null,
      reason: body.reason,
      priority: body.priority ?? 3,
      assignedTo: body.assignedTo ?? null,
    },
  });
  return { id: created.id, status: created.status };
}

export async function patchWalkIn(
  userId: string,
  id: string,
  body: { status?: string; assignedTo?: string | null; priority?: number; patientName?: string; reason?: string; checkOut?: boolean }
) {
  await requireReceptionist(userId);
  const exists = await prisma.walkInQueue.findUnique({ where: { id } });
  if (!exists) throw new Error('Walk-in not found');
  const updated = await prisma.walkInQueue.update({
    where: { id },
    data: {
      ...(body.status !== undefined ? { status: body.status } : {}),
      ...(body.assignedTo !== undefined ? { assignedTo: body.assignedTo } : {}),
      ...(body.priority !== undefined ? { priority: body.priority } : {}),
      ...(body.patientName !== undefined ? { patientName: body.patientName } : {}),
      ...(body.reason !== undefined ? { reason: body.reason } : {}),
      ...(body.checkOut ? { checkOutTime: new Date() } : {}),
    },
  });
  return { id: updated.id, status: updated.status, checkOutTime: updated.checkOutTime?.toISOString() ?? null };
}

export async function deleteWalkIn(userId: string, id: string) {
  await requireReceptionist(userId);
  const exists = await prisma.walkInQueue.findUnique({ where: { id } });
  if (!exists) throw new Error('Walk-in not found');
  await prisma.walkInQueue.delete({ where: { id } });
  return { id, deleted: true };
}

export async function getBilling(userId: string, query?: { q?: string; status?: TransactionStatus }) {
  const rec = await requireReceptionist(userId);
  const term = query?.q?.trim();
  const txns = await prisma.transaction.findMany({
    where: {
      receptionistId: rec.id,
      ...(query?.status ? { status: query.status } : {}),
      ...(term
        ? {
            OR: [
              { patient: { user: { firstName: { contains: term, mode: 'insensitive' } } } },
              { patient: { user: { lastName: { contains: term, mode: 'insensitive' } } } },
              { description: { contains: term, mode: 'insensitive' } },
            ],
          }
        : {}),
    },
    orderBy: { createdAt: 'desc' },
    take: 120,
    include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } },
  });
  const total = txns.reduce((sum, t) => sum + t.amount, 0);
  return {
    summary: {
      transactions: txns.length,
      totalAmount: total,
      completed: txns.filter((t) => t.status === 'PAID').length,
      failed: txns.filter((t) => t.status === 'FAILED').length,
    },
    transactions: txns.map((t) => ({
      id: t.id,
      patientName: `${t.patient.user.firstName} ${t.patient.user.lastName}`,
      amount: t.amount,
      status: t.status,
      method: t.paymentMethod,
      description: t.description,
      createdAt: t.createdAt.toISOString(),
    })),
  };
}

export async function createTransaction(
  userId: string,
  body: { patientId: string; amount: number; paymentMethod?: string; description?: string; status?: TransactionStatus }
) {
  const rec = await requireReceptionist(userId);
  const created = await prisma.transaction.create({
    data: {
      patientId: body.patientId,
      receptionistId: rec.id,
      amount: body.amount,
      paymentMethod: body.paymentMethod ?? null,
      description: body.description ?? null,
      status: body.status ?? 'PENDING',
    },
  });
  return { id: created.id, status: created.status, amount: created.amount };
}

export async function patchTransactionStatus(userId: string, id: string, status: TransactionStatus) {
  await requireReceptionist(userId);
  const exists = await prisma.transaction.findUnique({ where: { id } });
  if (!exists) throw new Error('Transaction not found');
  const updated = await prisma.transaction.update({ where: { id }, data: { status } });
  return { id: updated.id, status: updated.status };
}

export async function getSettings(userId: string) {
  const rec = await requireReceptionist(userId);
  return { settings: asObject(rec.preferences) };
}

export async function patchSettings(userId: string, settings: Record<string, unknown>) {
  const rec = await requireReceptionist(userId);
  const existing = asObject(rec.preferences);
  const next = { ...existing, ...settings };
  await prisma.receptionist.update({ where: { id: rec.id }, data: { preferences: next as Prisma.InputJsonValue } });
  return getSettings(userId);
}

