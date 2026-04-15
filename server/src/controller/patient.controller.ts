import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.middleware';
import * as patientService from '../services/patient.service';
import type { AppointmentStatus } from '../generated/prisma';

function getUserId(req: AuthRequest, res: Response): string | null {
  if (!req.user?.id) {
    res.status(401).json({ message: 'Unauthorized' });
    return null;
  }
  return req.user.id;
}

function handleError(error: unknown, res: Response) {
  if (error instanceof patientService.PatientNotFoundError) {
    res.status(404).json({ message: error.message });
    return;
  }
  const message = error instanceof Error ? error.message : 'Server error';
  const status = message.includes('not found') ? 404 : 400;
  res.status(status).json({ message });
}

export const getMe = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.getMe(userId);
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const patchMe = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.updateMe(userId, req.body);
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const getOverview = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.getOverview(userId);
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const getAppointments = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const appointments = await patientService.listAppointments(userId);
    res.status(200).json({ appointments });
  } catch (error) {
    handleError(error, res);
  }
};

export const postAppointment = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.createAppointment(userId, req.body);
    res.status(201).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const patchAppointment = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  const id = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
  if (!id) {
    res.status(400).json({ message: 'Missing id' });
    return;
  }
  try {
    const data = await patientService.patchAppointment(userId, id, req.body as { status?: AppointmentStatus; startTime?: string; endTime?: string });
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const getDoctors = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const q = typeof req.query.q === 'string' ? req.query.q : undefined;
    const doctors = await patientService.listDoctors(userId, q);
    res.status(200).json({ doctors });
  } catch (error) {
    handleError(error, res);
  }
};

export const getLabReports = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const labReports = await patientService.listLabReports(userId);
    res.status(200).json({ labReports });
  } catch (error) {
    handleError(error, res);
  }
};

export const getActivity = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.getActivity(userId);
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const getRegistration = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.getRegistration(userId);
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};

export const postRegistration = async (req: AuthRequest, res: Response) => {
  const userId = getUserId(req, res);
  if (!userId) return;
  try {
    const data = await patientService.saveRegistration(userId, req.body);
    res.status(200).json(data);
  } catch (error) {
    handleError(error, res);
  }
};
