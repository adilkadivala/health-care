import { Router } from 'express';
import { login, register, getProfile } from '../controller/auth.controller';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

// Example of protected route for the authenticated user
router.get('/profile', authenticate, getProfile);

// Examples of Role-based Protected Route
router.get('/admin-only', authenticate, authorizeRole(['ADMIN']), (req, res) => {
  res.json({ message: 'Welcome Admin' });
});

router.get('/doctor-only', authenticate, authorizeRole(['DOCTOR']), (req, res) => {
  res.json({ message: 'Welcome Doctor' });
});

export default router;
