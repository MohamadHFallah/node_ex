// import pg from 'pg';
// import 'dotenv/config';

// const { Client } = pg;

// const client = new Client({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT ? Number.parseInt(process.env.PG_PORT) : 5432,
//   database: process.env.PG_DATABASE,
// });

// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// export { client as pgClient };
