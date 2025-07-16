import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const result = await prisma.product.findMany({
    include: { images: true },
  });

  return NextResponse.json({
    data: result,
  });
};
