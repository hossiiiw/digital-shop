import ProductListView from '@/modules/product/views/ProductListView';
import React from 'react';

function Products() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl mx-auto my-8">product page</h1>
      <ProductListView />
    </div>
  );
}

export default Products;
