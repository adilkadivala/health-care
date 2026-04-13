import { Router } from 'express';
import authRoutes from './auth.routes';

const router = Router();

// Modular routing
router.use('/auth', authRoutes);

// You can add more routes here
// router.use('/users', userRoutes);
// router.use('/appointments', appointmentRoutes);

export default router;
