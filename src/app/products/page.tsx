import { prisma, PrismaType } from '@/lib/prisma';
import ProductListView from '@/modules/product/views/ProductListView';

import React from 'react';

async function Products() {
  const data = await prisma.product.findMany();
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl mx-auto my-8">product page</h1>
      <ProductListView />
    </div>
  );
}

export default Products;
