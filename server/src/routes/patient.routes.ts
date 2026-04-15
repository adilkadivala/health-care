import { Router } from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';
import * as patientController from '../controller/patient.controller';

const router = Router();

router.use(authenticate, authorizeRole(['PATIENT']));

router.get('/me', patientController.getMe);
router.patch('/me', patientController.patchMe);

router.get('/overview', patientController.getOverview);

router.get('/appointments', patientController.getAppointments);
router.post('/appointments', patientController.postAppointment);
router.patch('/appointments/:id', patientController.patchAppointment);

router.get('/doctors', patientController.getDoctors);

router.get('/lab-reports', patientController.getLabReports);
router.get('/activity', patientController.getActivity);

router.get('/registration', patientController.getRegistration);
router.post('/registration', patientController.postRegistration);

export default router;
