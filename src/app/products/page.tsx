// import { prisma } from '@/lib/prisma';
import ProductListView from '@/modules/product/views/ProductListView';
import { Prisma, PrismaClient } from '@prisma/client';
import React from 'react';

async function Products() {
  const prisma = await new PrismaClient().Product;

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl mx-auto my-8">product page</h1>
      <ProductListView />
    </div>
  );
}

export default Products;
