import React from 'react';
import ProductItem from './ProductItem';
import { ProductsWithImages } from '@/types';
function ProductList(props: { product: ProductsWithImages[] }) {
  const { product } = props;
  console.log(product);
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {product.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ProductList;
