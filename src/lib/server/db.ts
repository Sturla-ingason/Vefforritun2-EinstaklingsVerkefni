// src/lib/server/db.ts
import { PrismaClient } from './generated/prisma/client/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';
import { DATABASE_URL } from '$env/static/private';

const adapter = new PrismaPg({ connectionString: DATABASE_URL, ssl: true });
const prisma = new PrismaClient({ adapter });
export default prisma;
