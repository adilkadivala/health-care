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
router.delete('/walk-ins/:id', receptionController.deleteWalkIn);
// Backward-compatible aliases for clients using alternate path styles
router.get('/walkins', receptionController.getWalkIns);
router.post('/walkins', receptionController.postWalkIn);
router.patch('/walkins/:id', receptionController.patchWalkIn);
router.delete('/walkins/:id', receptionController.deleteWalkIn);
router.get('/walk-in', receptionController.getWalkIns);
router.post('/walk-in', receptionController.postWalkIn);
router.patch('/walk-in/:id', receptionController.patchWalkIn);
router.delete('/walk-in/:id', receptionController.deleteWalkIn);

router.get('/billing', receptionController.getBilling);
router.post('/transactions', receptionController.postTransaction);
router.patch('/transactions/:id', receptionController.patchTransaction);

router.get('/settings', receptionController.getSettings);
router.patch('/settings', receptionController.patchSettings);

export default router;
