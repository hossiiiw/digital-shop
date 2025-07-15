import { PrismaClient } from '@/generated/prisma';
import type * as PrismaType from '@prisma/client';

export const prisma = new PrismaClient();
export type { PrismaType };
