import type { Response } from 'express';
import * as authService from '../services/auth.service';
import type { AuthRequest } from '../middleware/auth.middleware';

export const register = async (req: AuthRequest, res: Response) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error registering user';
    res.status(400).json({ message });
  }
};

export const login = async (req: AuthRequest, res: Response) => {
  try {
    const { user, token } = await authService.loginUser(req.body);
    res.status(200).json({
      message: 'Logged in successfully',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Login failed';
    res.status(401).json({ message });
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const user = await authService.getUserProfileById(req.user.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({ user });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};

export const uploadProfilePicture = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const file = (req as AuthRequest & { file?: Express.Multer.File }).file;
    if (!file) {
      res.status(400).json({ message: 'Profile picture file is required' });
      return;
    }

    const avatarUrl = `/uploads/profile-pictures/${file.filename}`;
    const user = await authService.updateUserAvatar(req.user.id, avatarUrl);
    res.status(200).json({ message: 'Profile picture uploaded successfully', user });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};
