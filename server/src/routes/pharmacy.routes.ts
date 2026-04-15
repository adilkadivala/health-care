import { Router } from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';
import * as pharmacyController from '../controller/pharmacy.controller';

const router = Router();

router.use(authenticate, authorizeRole(['PHARMACIST']));

router.get('/me', pharmacyController.getMe);
router.patch('/me', pharmacyController.patchMe);
router.get('/overview', pharmacyController.getOverview);

router.get('/orders', pharmacyController.getOrders);
router.post('/orders', pharmacyController.postOrder);
router.get('/patients', pharmacyController.getPatients);
router.get('/doctors', pharmacyController.getDoctors);
router.patch('/orders/:id', pharmacyController.patchOrder);

router.get('/inventory', pharmacyController.getInventory);
router.patch('/inventory/:id', pharmacyController.patchInventory);

router.get('/history', pharmacyController.getHistory);
router.get('/activity', pharmacyController.getActivity);

router.get('/settings', pharmacyController.getSettings);
router.patch('/settings', pharmacyController.patchSettings);

export default router;
