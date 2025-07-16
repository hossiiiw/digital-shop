import ProductDetails from '@/modules/product/components/ProductDetails';
import { DATA } from '@/modules/product/mock/products';
import { getProducts, getProductsById } from '@/modules/product/services';
import { ProductsWithImages } from '@/types';
import React from 'react';

interface IProductProps {
  params: Promise<{ id: string }>;
}

async function Products(props: {
  params: IProductProps;
}) {
  const { id } = await props.params;
  const data = await getProductsById(id) as ProductsWithImages;
  console.log(data);
  return (
    <div>
      <ProductDetails {...data} />
    </div>
  );
}

export default Products;
