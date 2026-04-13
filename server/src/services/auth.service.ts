import prisma from '../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

export const registerUser = async (data: any) => {
  const { email, password, firstName, lastName, role, phone } = data;
  
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const parsedRole = role || 'PATIENT'; // defaulting to patient

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role: parsedRole,
      phone,
    },
  });

  // Automatically create a base profile. Adjust based on exactly what fields your frontend passes.
  if (newUser.role === 'PATIENT') {
    await prisma.patient.create({
      data: {
        userId: newUser.id,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : new Date(),
        bloodGroup: data.bloodGroup || 'O+',
      }
    });
  } 

  return newUser;
};

export const loginUser = async (data: any) => {
  const { email, password } = data;

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
