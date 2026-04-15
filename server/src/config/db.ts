import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Configure it in your environment variables.');
}

const globalForPrisma = globalThis as unknown as {
  __pool?: Pool;
  __prisma?: PrismaClient;
};

const pool =
  globalForPrisma.__pool ??
  new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 20_000,
  });
const adapter = new PrismaPg(pool);
const prisma = globalForPrisma.__prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__pool = pool;
  globalForPrisma.__prisma = prisma;
}

export default prisma;
