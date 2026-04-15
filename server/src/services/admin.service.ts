import prisma from '../config/db';
import { Prisma, type Role } from '../generated/prisma';

export class AdminNotFoundError extends Error {
  constructor() {
    super('Admin profile not found');
    this.name = 'AdminNotFoundError';
  }
}

async function requireAdmin(userId: string) {
  const admin = await prisma.admin.findUnique({
    where: { userId },
    include: {
      user: { select: { id: true, email: true, role: true, firstName: true, lastName: true, phone: true } },
    },
  });
  if (!admin) throw new AdminNotFoundError();
  return admin;
}

function asObject(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

export async function getMe(userId: string) {
  const a = await requireAdmin(userId);
  return {
    user: a.user,
    admin: { id: a.id, accessLevel: a.accessLevel, preferences: a.preferences },
  };
}

export async function patchMe(
  userId: string,
  body: { firstName?: string; lastName?: string; phone?: string | null; preferences?: Prisma.InputJsonValue | null }
) {
  const a = await requireAdmin(userId);
  const userUpdate: Prisma.UserUpdateInput = {};
  if (body.firstName !== undefined) userUpdate.firstName = body.firstName;
  if (body.lastName !== undefined) userUpdate.lastName = body.lastName;
  if (body.phone !== undefined) userUpdate.phone = body.phone;
  const adminUpdate: Prisma.AdminUpdateInput = {};
  if (body.preferences !== undefined) adminUpdate.preferences = body.preferences ?? Prisma.JsonNull;
  const ops: Prisma.PrismaPromise<unknown>[] = [];
  if (Object.keys(userUpdate).length) ops.push(prisma.user.update({ where: { id: userId }, data: userUpdate }));
  if (Object.keys(adminUpdate).length) ops.push(prisma.admin.update({ where: { id: a.id }, data: adminUpdate }));
  if (ops.length) await prisma.$transaction(ops);
  return getMe(userId);
}

export async function getOverview(userId: string) {
  await requireAdmin(userId);
  const [users, appointments, doctors, patients, txAgg, criticalLabs] = await Promise.all([
    prisma.user.count(),
    prisma.appointment.count(),
    prisma.doctor.count(),
    prisma.patient.count(),
    prisma.transaction.aggregate({ _sum: { amount: true }, _count: true }),
    prisma.labReport.count({ where: { status: 'CRITICAL' } }),
  ]);
  return {
    metrics: {
      totalUsers: users,
      totalDoctors: doctors,
      totalPatients: patients,
      totalAppointments: appointments,
      revenueTotal: txAgg._sum.amount ?? 0,
      transactionsCount: txAgg._count,
      criticalLabs,
    },
  };
}

export async function getOverviewTrends(userId: string, rangeDays: number) {
  await requireAdmin(userId);
  const days = Number.isFinite(rangeDays) ? Math.max(7, Math.min(180, Math.trunc(rangeDays))) : 90;
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));

  const [appointments, patients] = await Promise.all([
    prisma.appointment.findMany({
      where: { createdAt: { gte: start } },
      select: { createdAt: true },
    }),
    prisma.patient.findMany({
      where: { user: { createdAt: { gte: start } } },
      select: { user: { select: { createdAt: true } } },
    }),
  ]);

  const toKey = (date: Date) => date.toISOString().slice(0, 10);
  const appointmentByDate = new Map<string, number>();
  const patientByDate = new Map<string, number>();

  for (const row of appointments) {
    const key = toKey(row.createdAt);
    appointmentByDate.set(key, (appointmentByDate.get(key) ?? 0) + 1);
  }
  for (const row of patients) {
    const key = toKey(row.user.createdAt);
    patientByDate.set(key, (patientByDate.get(key) ?? 0) + 1);
  }

  const points: Array<{ date: string; desktop: number; mobile: number }> = [];
  for (let i = 0; i < days; i += 1) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = toKey(d);
    points.push({
      date: key,
      desktop: appointmentByDate.get(key) ?? 0,
      mobile: patientByDate.get(key) ?? 0,
    });
  }

  return { points };
}

export async function listUsers(userId: string) {
  await requireAdmin(userId);
  const rows = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
    select: { id: true, email: true, role: true, firstName: true, lastName: true, phone: true, createdAt: true },
  });
  return rows.map((u) => ({ ...u, createdAt: u.createdAt.toISOString() }));
}

export async function patchUserRole(userId: string, targetUserId: string, role: Role) {
  await requireAdmin(userId);
  const updated = await prisma.user.update({
    where: { id: targetUserId },
    data: { role },
    select: { id: true, email: true, role: true },
  });
  return updated;
}

export async function getFinancialReport(userId: string) {
  await requireAdmin(userId);
  const [agg, byStatus, recent] = await Promise.all([
    prisma.transaction.aggregate({ _sum: { amount: true }, _avg: { amount: true }, _count: true }),
    prisma.transaction.groupBy({ by: ['status'], _sum: { amount: true }, _count: true }),
    prisma.transaction.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } },
    }),
  ]);
  return {
    summary: {
      totalAmount: agg._sum.amount ?? 0,
      averageAmount: agg._avg.amount ?? 0,
      totalTransactions: agg._count,
      byStatus: byStatus.map((s) => ({ status: s.status, count: s._count, amount: s._sum.amount ?? 0 })),
    },
    transactions: recent.map((t) => ({
      id: t.id,
      patientName: `${t.patient.user.firstName} ${t.patient.user.lastName}`,
      amount: t.amount,
      status: t.status,
      method: t.paymentMethod,
      createdAt: t.createdAt.toISOString(),
    })),
  };
}

export async function getActivity(userId: string) {
  await requireAdmin(userId);
  const [users, appointments, txns, labs] = await Promise.all([
    prisma.user.findMany({ orderBy: { createdAt: 'desc' }, take: 20 }),
    prisma.appointment.findMany({ orderBy: { updatedAt: 'desc' }, take: 20 }),
    prisma.transaction.findMany({ orderBy: { updatedAt: 'desc' }, take: 20 }),
    prisma.labReport.findMany({ where: { status: 'CRITICAL' }, orderBy: { createdAt: 'desc' }, take: 10 }),
  ]);
  const items: Array<{ id: string; lane: string; title: string; status: string; time: string }> = [];
  for (const u of users) items.push({ id: `u-${u.id}`, lane: 'Users', title: `User created: ${u.email}`, status: u.role, time: u.createdAt.toISOString() });
  for (const a of appointments) items.push({ id: `a-${a.id}`, lane: 'Appointments', title: `Appointment ${a.status.replace('_', ' ')}`, status: a.status, time: a.updatedAt.toISOString() });
  for (const t of txns) items.push({ id: `t-${t.id}`, lane: 'Billing', title: `Transaction ${t.status}`, status: t.status, time: t.updatedAt.toISOString() });
  for (const l of labs) items.push({ id: `l-${l.id}`, lane: 'Labs', title: `Critical lab: ${l.title}`, status: l.status, time: l.createdAt.toISOString() });
  items.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return { items: items.slice(0, 60) };
}

export async function getAudit(userId: string) {
  await requireAdmin(userId);
  const [userUpdates, apptUpdates, txUpdates] = await Promise.all([
    prisma.user.findMany({ orderBy: { updatedAt: 'desc' }, take: 25 }),
    prisma.appointment.findMany({ orderBy: { updatedAt: 'desc' }, take: 25 }),
    prisma.transaction.findMany({ orderBy: { updatedAt: 'desc' }, take: 25 }),
  ]);
  const logs = [
    ...userUpdates.map((u) => ({ id: `user-${u.id}`, category: 'USER', message: `User ${u.email} updated`, at: u.updatedAt.toISOString() })),
    ...apptUpdates.map((a) => ({ id: `appt-${a.id}`, category: 'APPOINTMENT', message: `Appointment ${a.id} updated`, at: a.updatedAt.toISOString() })),
    ...txUpdates.map((t) => ({ id: `txn-${t.id}`, category: 'TRANSACTION', message: `Transaction ${t.id} updated`, at: t.updatedAt.toISOString() })),
  ];
  logs.sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());
  return { logs: logs.slice(0, 80) };
}

export async function getConfig(userId: string) {
  const a = await requireAdmin(userId);
  const pref = asObject(a.preferences);
  return { config: asObject(pref.config), settings: asObject(pref.settings), hospitalProfile: asObject(pref.hospitalProfile), reviews: Array.isArray(pref.reviews) ? pref.reviews : [] };
}

export async function patchConfig(userId: string, key: 'config' | 'settings' | 'hospitalProfile' | 'reviews', value: unknown) {
  const a = await requireAdmin(userId);
  const pref = asObject(a.preferences);
  const next = { ...pref, [key]: value };
  await prisma.admin.update({ where: { id: a.id }, data: { preferences: next as Prisma.InputJsonValue } });
  return getConfig(userId);
}

