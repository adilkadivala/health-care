import { Router } from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';
import * as doctorController from '../controller/doctor.controller';

const router = Router();

router.use(authenticate, authorizeRole(['DOCTOR']));

router.get('/me', doctorController.getMe);
router.patch('/me', doctorController.patchMe);

router.get('/overview', doctorController.getOverview);

router.get('/appointments', doctorController.getAppointments);
router.post('/appointments', doctorController.postAppointment);
router.patch('/appointments/:id', doctorController.patchAppointment);

router.get('/patients/search', doctorController.getPatientSearch);
router.get('/patients', doctorController.getPatients);

router.get('/lab-reports', doctorController.getLabReports);
router.patch('/lab-reports/:id', doctorController.patchLabReport);

router.get('/billing', doctorController.getBilling);

router.get('/signatures/pending', doctorController.getPendingSignatures);
router.post('/medical-records/:id/sign', doctorController.postSignRecord);

router.get('/activity', doctorController.getActivity);

export default router;
