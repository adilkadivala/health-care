import { Router } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import multer from 'multer';
import { login, register, getProfile, uploadProfilePicture } from '../controller/auth.controller';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';
import type { AuthRequest } from '../middleware/auth.middleware';

const router = Router();
const uploadDir = path.join(process.cwd(), 'uploads', 'profile-pictures');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const imageUpload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
      const extension = path.extname(file.originalname) || '.jpg';
      const safeExtension = extension.toLowerCase();
      const userId = (req as AuthRequest).user?.id ?? 'user';
      cb(null, `${userId}-${Date.now()}${safeExtension}`);
    },
  }),
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Only image files are allowed'));
      return;
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post('/register', register);
router.post('/login', login);

// Example of protected route for the authenticated user
router.get('/profile', authenticate, getProfile);
router.post('/profile-picture', authenticate, imageUpload.single('image'), uploadProfilePicture);

// Examples of Role-based Protected Route
router.get('/admin-only', authenticate, authorizeRole(['ADMIN']), (req, res) => {
  res.json({ message: 'Welcome Admin' });
});

router.get('/doctor-only', authenticate, authorizeRole(['DOCTOR']), (req, res) => {
  res.json({ message: 'Welcome Doctor' });
});

export default router;
