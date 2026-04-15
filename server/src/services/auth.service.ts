import prisma from '../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { Role } from '../generated/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

const ROLE_VALUES: Role[] = ['PATIENT', 'DOCTOR', 'ADMIN', 'RECEPTIONIST', 'PHARMACIST'];

function parseRole(role: unknown): Role {
  const r = typeof role === 'string' ? role.toUpperCase() : 'PATIENT';
  if (ROLE_VALUES.includes(r as Role)) return r as Role;
  return 'PATIENT';
}

async function createRoleProfile(
  userId: string,
  role: Role,
  data: Record<string, unknown>
) {
  const suffix = userId.slice(-10);

  switch (role) {
    case 'PATIENT':
      await prisma.patient.create({
        data: {
          userId,
          dateOfBirth: data.dateOfBirth ? new Date(String(data.dateOfBirth)) : new Date(),
          bloodGroup: (data.bloodGroup as string) || 'O+',
          allergies: [],
        },
      });
      break;
    case 'DOCTOR':
      await prisma.doctor.create({
        data: {
          userId,
          specialization: (data.specialization as string) || 'General Practice',
          licenseNumber: (data.licenseNumber as string) || `DOC-LIC-${suffix}`,
          department: (data.department as string) || 'General',
        },
      });
      break;
    case 'ADMIN':
      await prisma.admin.create({
        data: { userId },
      });
      break;
    case 'RECEPTIONIST':
      await prisma.receptionist.create({
        data: { userId },
      });
      break;
    case 'PHARMACIST':
      await prisma.pharmacist.create({
        data: {
          userId,
          licenseNumber: (data.licenseNumber as string) || `PHARM-LIC-${suffix}`,
        },
      });
      break;
    default:
      break;
  }
}

export const registerUser = async (data: Record<string, unknown>) => {
  const { email, password, firstName, lastName, phone } = data;

  const existingUser = await prisma.user.findUnique({ where: { email: String(email) } });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(String(password), 10);
  const parsedRole = parseRole(data.role);

  const newUser = await prisma.user.create({
    data: {
      email: String(email),
      password: hashedPassword,
      firstName: String(firstName),
      lastName: String(lastName),
      role: parsedRole,
      phone: phone != null ? String(phone) : null,
    },
  });

  await createRoleProfile(newUser.id, parsedRole, data);

  return newUser;
};

export const getUserProfileById = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      role: true,
      firstName: true,
      lastName: true,
      phone: true,
      avatarUrl: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const updateUserAvatar = async (userId: string, avatarUrl: string) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { avatarUrl },
    select: {
      id: true,
      email: true,
      role: true,
      firstName: true,
      lastName: true,
      phone: true,
      avatarUrl: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const loginUser = async (data: Record<string, unknown>) => {
  const email = String(data.email ?? '');
  const password = String(data.password ?? '');

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { user, token };
};
