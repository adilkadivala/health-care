import { Router } from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';
import * as receptionController from '../controller/reception.controller';

const router = Router();

router.use(authenticate, authorizeRole(['RECEPTIONIST']));

router.get('/me', receptionController.getMe);
router.patch('/me', receptionController.patchMe);
router.get('/overview', receptionController.getOverview);

router.get('/appointments', receptionController.getAppointments);
router.get('/patients', receptionController.getPatients);
router.get('/doctors', receptionController.getDoctors);
router.post('/appointments', receptionController.postAppointment);
router.patch('/appointments/:id', receptionController.patchAppointment);

router.get('/walk-ins', receptionController.getWalkIns);
router.post('/walk-ins', receptionController.postWalkIn);
router.patch('/walk-ins/:id', receptionController.patchWalkIn);

router.get('/billing', receptionController.getBilling);
router.post('/transactions', receptionController.postTransaction);
router.patch('/transactions/:id', receptionController.patchTransaction);

router.get('/settings', receptionController.getSettings);
router.patch('/settings', receptionController.patchSettings);

export default router;
