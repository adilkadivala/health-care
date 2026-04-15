import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.middleware';
import * as receptionService from '../services/reception.service';
import type { AppointmentStatus, TransactionStatus } from '../generated/prisma';

function userId(req: AuthRequest, res: Response): string | null {
  if (!req.user?.id) {
    res.status(401).json({ message: 'Unauthorized' });
    return null;
  }
  return req.user.id;
}

function fail(error: unknown, res: Response) {
  if (error instanceof receptionService.ReceptionistNotFoundError) {
    res.status(404).json({ message: error.message });
    return;
  }
  const message = error instanceof Error ? error.message : 'Server error';
  res.status(message.includes('not found') ? 404 : 400).json({ message });
}

export const getMe = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await receptionService.getMe(id)); } catch (e) { fail(e, res); }
};
export const patchMe = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await receptionService.patchMe(id, req.body)); } catch (e) { fail(e, res); }
};
export const getOverview = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await receptionService.getOverview(id)); } catch (e) { fail(e, res); }
};
export const getAppointments = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ appointments: await receptionService.listAppointments(id) }); } catch (e) { fail(e, res); }
};
export const getPatients = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ patients: await receptionService.listPatients(id) }); } catch (e) { fail(e, res); }
};
export const getDoctors = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ doctors: await receptionService.listDoctors(id) }); } catch (e) { fail(e, res); }
};
export const postAppointment = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(201).json(await receptionService.createAppointment(id, req.body)); } catch (e) { fail(e, res); }
};
export const patchAppointment = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  const apptId = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
  if (!apptId) { res.status(400).json({ message: 'Missing appointment id' }); return; }
  try { res.status(200).json(await receptionService.patchAppointment(id, apptId, req.body as { status?: AppointmentStatus })); } catch (e) { fail(e, res); }
};
export const getWalkIns = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ walkIns: await receptionService.listWalkIns(id) }); } catch (e) { fail(e, res); }
};
export const postWalkIn = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(201).json(await receptionService.createWalkIn(id, req.body)); } catch (e) { fail(e, res); }
};
export const patchWalkIn = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  const walkId = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
  if (!walkId) { res.status(400).json({ message: 'Missing walk-in id' }); return; }
  try { res.status(200).json(await receptionService.patchWalkIn(id, walkId, req.body)); } catch (e) { fail(e, res); }
};
export const getBilling = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await receptionService.getBilling(id)); } catch (e) { fail(e, res); }
};
export const postTransaction = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(201).json(await receptionService.createTransaction(id, req.body)); } catch (e) { fail(e, res); }
};
export const patchTransaction = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  const txId = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
  if (!txId) { res.status(400).json({ message: 'Missing transaction id' }); return; }
  try { res.status(200).json(await receptionService.patchTransactionStatus(id, txId, req.body.status as TransactionStatus)); } catch (e) { fail(e, res); }
};
export const getSettings = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await receptionService.getSettings(id)); } catch (e) { fail(e, res); }
};
export const patchSettings = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await receptionService.patchSettings(id, req.body.settings ?? {})); } catch (e) { fail(e, res); }
};

