import prisma from '../config/db';
import { Prisma, type PrescriptionStatus } from '../generated/prisma';

export class PharmacistNotFoundError extends Error {
  constructor() {
    super('Pharmacist profile not found');
    this.name = 'PharmacistNotFoundError';
  }
}

async function requirePharmacist(userId: string) {
  const pharmacist = await prisma.pharmacist.findUnique({
    where: { userId },
    include: { user: { select: { id: true, email: true, firstName: true, lastName: true, phone: true, role: true } } },
  });
  if (!pharmacist) throw new PharmacistNotFoundError();
  return pharmacist;
}

function asObject(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

export async function getMe(userId: string) {
  const p = await requirePharmacist(userId);
  return { user: p.user, pharmacist: { id: p.id, licenseNumber: p.licenseNumber, preferences: p.preferences } };
}

export async function patchMe(userId: string, body: { phone?: string | null; preferences?: Prisma.InputJsonValue | null }) {
  const p = await requirePharmacist(userId);
  const userUpdate: Prisma.UserUpdateInput = {};
  if (body.phone !== undefined) userUpdate.phone = body.phone;
  const pharmacistUpdate: Prisma.PharmacistUpdateInput = {};
  if (body.preferences !== undefined) pharmacistUpdate.preferences = body.preferences ?? Prisma.JsonNull;
  const ops: Prisma.PrismaPromise<unknown>[] = [];
  if (Object.keys(userUpdate).length) ops.push(prisma.user.update({ where: { id: userId }, data: userUpdate }));
  if (Object.keys(pharmacistUpdate).length) ops.push(prisma.pharmacist.update({ where: { id: p.id }, data: pharmacistUpdate }));
  if (ops.length) await prisma.$transaction(ops);
  return getMe(userId);
}

export async function getOverview(userId: string) {
  const p = await requirePharmacist(userId);
  const [pendingOrders, lowStock, nearExpiryMock, dispensedToday] = await Promise.all([
    prisma.prescription.count({ where: { status: 'PENDING' } }),
    prisma.medication.count({ where: { stockQuantity: { lt: 20 } } }),
    prisma.medication.count({ where: { stockQuantity: { gte: 20, lt: 40 } } }),
    prisma.prescription.count({ where: { pharmacistId: p.id, status: 'DISPENSED' } }),
  ]);
  return {
    metrics: { pendingOrders, lowStock, nearExpiry: nearExpiryMock, dispensedToday },
  };
}

export async function listOrders(userId: string) {
  await requirePharmacist(userId);
  const rows = await prisma.prescription.findMany({
    orderBy: { createdAt: 'desc' },
    take: 120,
    include: {
      patient: { include: { user: { select: { firstName: true, lastName: true } } } },
      doctor: { include: { user: { select: { firstName: true, lastName: true } } } },
      items: { include: { medication: true } },
    },
  });
  return rows.map((r) => ({
    id: r.id,
    patientName: `${r.patient.user.firstName} ${r.patient.user.lastName}`,
    doctorName: `Dr. ${r.doctor.user.firstName} ${r.doctor.user.lastName}`,
    status: r.status,
    createdAt: r.createdAt.toISOString(),
    notes: r.notes,
    items: r.items.map((i) => ({ id: i.id, medication: i.medication.name, quantity: i.quantity, dosage: i.dosage, frequency: i.frequency })),
  }));
}

export async function listPatients(userId: string) {
  await requirePharmacist(userId);
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
  await requirePharmacist(userId);
  const rows = await prisma.doctor.findMany({
    orderBy: { user: { firstName: 'asc' } },
    take: 200,
    include: { user: { select: { firstName: true, lastName: true, email: true } } },
  });
  return rows.map((d) => ({
    id: d.id,
    name: `Dr. ${d.user.firstName} ${d.user.lastName}`,
    department: d.department,
    specialization: d.specialization,
    email: d.user.email,
  }));
}

export async function patchOrderStatus(userId: string, id: string, status: PrescriptionStatus) {
  const p = await requirePharmacist(userId);
  const row = await prisma.prescription.findUnique({ where: { id } });
  if (!row) throw new Error('Order not found');
  const updated = await prisma.prescription.update({
    where: { id },
    data: {
      status,
      ...(status === 'DISPENSED' ? { pharmacistId: p.id } : {}),
    },
  });
  return { id: updated.id, status: updated.status };
}

export async function listInventory(userId: string) {
  await requirePharmacist(userId);
  const meds = await prisma.medication.findMany({ orderBy: { updatedAt: 'desc' }, take: 300 });
  return meds.map((m) => ({
    id: m.id,
    name: m.name,
    brandName: m.brandName,
    stockQuantity: m.stockQuantity,
    unitPrice: m.unitPrice,
    requiresPrescription: m.requiresPrescription,
    updatedAt: m.updatedAt.toISOString(),
  }));
}

export async function patchInventoryItem(userId: string, id: string, body: { stockQuantity?: number; unitPrice?: number }) {
  await requirePharmacist(userId);
  const updated = await prisma.medication.update({
    where: { id },
    data: {
      ...(body.stockQuantity !== undefined ? { stockQuantity: body.stockQuantity } : {}),
      ...(body.unitPrice !== undefined ? { unitPrice: body.unitPrice } : {}),
    },
  });
  return { id: updated.id, stockQuantity: updated.stockQuantity, unitPrice: updated.unitPrice };
}

export async function getHistory(userId: string) {
  await requirePharmacist(userId);
  const [dispensed, cancelled] = await Promise.all([
    prisma.prescription.findMany({
      where: { status: 'DISPENSED' },
      orderBy: { updatedAt: 'desc' },
      take: 100,
      include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } },
    }),
    prisma.prescription.findMany({
      where: { status: 'CANCELLED' },
      orderBy: { updatedAt: 'desc' },
      take: 50,
      include: { patient: { include: { user: { select: { firstName: true, lastName: true } } } } },
    }),
  ]);
  return {
    dispensed: dispensed.map((d) => ({ id: d.id, patientName: `${d.patient.user.firstName} ${d.patient.user.lastName}`, updatedAt: d.updatedAt.toISOString(), notes: d.notes })),
    cancelled: cancelled.map((d) => ({ id: d.id, patientName: `${d.patient.user.firstName} ${d.patient.user.lastName}`, updatedAt: d.updatedAt.toISOString(), notes: d.notes })),
  };
}

export async function getActivity(userId: string) {
  await requirePharmacist(userId);
  const [orders, meds] = await Promise.all([
    prisma.prescription.findMany({ orderBy: { updatedAt: 'desc' }, take: 50 }),
    prisma.medication.findMany({ orderBy: { updatedAt: 'desc' }, take: 50 }),
  ]);
  const items = [
    ...orders.map((o) => ({ id: `order-${o.id}`, lane: 'Order', title: `Prescription ${o.status}`, time: o.updatedAt.toISOString(), status: o.status })),
    ...meds.map((m) => ({ id: `med-${m.id}`, lane: 'Inventory', title: `${m.name} stock updated`, time: m.updatedAt.toISOString(), status: `${m.stockQuantity}` })),
  ];
  items.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return { items: items.slice(0, 80) };
}

export async function getSettings(userId: string) {
  const p = await requirePharmacist(userId);
  return { settings: asObject(p.preferences), help: (asObject(p.preferences).help as unknown[]) ?? [] };
}

export async function patchSettings(userId: string, body: { settings?: Record<string, unknown>; help?: unknown[] }) {
  const p = await requirePharmacist(userId);
  const existing = asObject(p.preferences);
  const next = {
    ...existing,
    ...(body.settings ? body.settings : {}),
    ...(body.help ? { help: body.help } : {}),
  };
  await prisma.pharmacist.update({ where: { id: p.id }, data: { preferences: next as Prisma.InputJsonValue } });
  return getSettings(userId);
}

