import ProductDetails from '@/modules/product/components/ProductDetails';
import { DATA } from '@/modules/product/mock/products';
import React from 'react';

interface IProductProps {
  params: Promise<{ id: string }>;
}

async function Products({ params }: IProductProps) {
  const { id } = await params;
  const data = DATA.find((item) => item.id === id);
  return (
    <div>
      <ProductDetails {...data} />
    </div>
  );
}

export default Products;
