import { Router } from 'express';
import authRoutes from './auth.routes';
import doctorRoutes from './doctor.routes';
import patientRoutes from './patient.routes';
import adminRoutes from './admin.routes';
import pharmacyRoutes from './pharmacy.routes';
import receptionRoutes from './reception.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);
router.use('/admin', adminRoutes);
router.use('/pharmacy', pharmacyRoutes);
router.use('/reception', receptionRoutes);

export default router;
