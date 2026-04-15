import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.middleware';
import * as pharmacyService from '../services/pharmacy.service';
import type { PrescriptionStatus } from '../generated/prisma';

function userId(req: AuthRequest, res: Response): string | null {
  if (!req.user?.id) { res.status(401).json({ message: 'Unauthorized' }); return null; }
  return req.user.id;
}

function fail(error: unknown, res: Response) {
  if (error instanceof pharmacyService.PharmacistNotFoundError) {
    res.status(404).json({ message: error.message }); return;
  }
  const message = error instanceof Error ? error.message : 'Server error';
  res.status(message.includes('not found') ? 404 : 400).json({ message });
}

export const getMe = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.getMe(id)); } catch (e) { fail(e, res); }
};
export const patchMe = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.patchMe(id, req.body)); } catch (e) { fail(e, res); }
};
export const getOverview = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.getOverview(id)); } catch (e) { fail(e, res); }
};
export const getOrders = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ orders: await pharmacyService.listOrders(id) }); } catch (e) { fail(e, res); }
};
export const getPatients = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ patients: await pharmacyService.listPatients(id) }); } catch (e) { fail(e, res); }
};
export const getDoctors = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ doctors: await pharmacyService.listDoctors(id) }); } catch (e) { fail(e, res); }
};
export const patchOrder = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  const orderId = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
  if (!orderId) { res.status(400).json({ message: 'Missing order id' }); return; }
  try { res.status(200).json(await pharmacyService.patchOrderStatus(id, orderId, req.body.status as PrescriptionStatus)); } catch (e) { fail(e, res); }
};
export const getInventory = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json({ inventory: await pharmacyService.listInventory(id) }); } catch (e) { fail(e, res); }
};
export const patchInventory = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  const medId = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
  if (!medId) { res.status(400).json({ message: 'Missing medication id' }); return; }
  try { res.status(200).json(await pharmacyService.patchInventoryItem(id, medId, req.body)); } catch (e) { fail(e, res); }
};
export const getHistory = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.getHistory(id)); } catch (e) { fail(e, res); }
};
export const getActivity = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.getActivity(id)); } catch (e) { fail(e, res); }
};
export const getSettings = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.getSettings(id)); } catch (e) { fail(e, res); }
};
export const patchSettings = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res); if (!id) return;
  try { res.status(200).json(await pharmacyService.patchSettings(id, req.body)); } catch (e) { fail(e, res); }
};

