import "dotenv/config";
import { defineConfig } from "prisma/config";

const prismaCliUrl = process.env.DIRECT_URL ?? process.env.DATABASE_URL;

if (!prismaCliUrl) {
  throw new Error("Set DIRECT_URL or DATABASE_URL for Prisma.");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: prismaCliUrl,
  },
});
