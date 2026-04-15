import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.middleware';
import * as doctorService from '../services/doctor.service';
import type { AppointmentStatus, LabReportStatus } from '../generated/prisma';

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.getMe(req.user.id);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const patchMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.updateMe(req.user.id, req.body);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(400).json({ message });
  }
};

export const getOverview = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.getOverview(req.user.id);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const getAppointments = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const { from, to, status } = req.query;
    const data = await doctorService.listAppointments(req.user.id, {
      from: typeof from === 'string' ? from : undefined,
      to: typeof to === 'string' ? to : undefined,
      status: status as AppointmentStatus | undefined,
    });
    res.status(200).json({ appointments: data });
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const postAppointment = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.createAppointment(req.user.id, req.body);
    res.status(201).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(400).json({ message });
  }
};

export const patchAppointment = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const id = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
    if (!id) {
      res.status(400).json({ message: 'Missing id' });
      return;
    }
    const data = await doctorService.updateAppointment(req.user.id, id, req.body);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(message === 'Appointment not found' ? 404 : 400).json({ message });
  }
};

export const getPatientSearch = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const q = typeof req.query.q === 'string' ? req.query.q : '';
    const data = await doctorService.searchPatients(req.user.id, q);
    res.status(200).json({ patients: data });
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const getPatients = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.listPatients(req.user.id);
    res.status(200).json({ patients: data });
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const getLabReports = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.listLabReports(req.user.id);
    res.status(200).json({ labReports: data });
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const patchLabReport = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const id = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
    if (!id) {
      res.status(400).json({ message: 'Missing id' });
      return;
    }
    const data = await doctorService.updateLabReport(req.user.id, id, req.body as { status?: LabReportStatus; resultNotes?: string | null });
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(message === 'Lab report not found' ? 404 : 400).json({ message });
  }
};

export const getBilling = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.getBilling(req.user.id);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const getPendingSignatures = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.listPendingSignatures(req.user.id);
    res.status(200).json({ documents: data });
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const postSignRecord = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const id = typeof req.params.id === 'string' ? req.params.id : req.params.id?.[0];
    if (!id) {
      res.status(400).json({ message: 'Missing id' });
      return;
    }
    const data = await doctorService.signMedicalRecord(req.user.id, id);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(message === 'Medical record not found' ? 404 : 400).json({ message });
  }
};

export const getActivity = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const data = await doctorService.getActivity(req.user.id);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof doctorService.DoctorNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};
