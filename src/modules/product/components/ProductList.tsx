import React from 'react';
import ProductItem from './ProductItem';
import { DATA } from '../mock/products';

function ProductList() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {DATA.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ProductList;
