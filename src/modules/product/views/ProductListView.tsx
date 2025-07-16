'use client';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProductAPI, getProducts } from '../services';
import { ProductsWithImages } from '@/types';

function ProductListView() {
  const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const getProductData = async () => {
    const result = await getProductAPI();
    setProducts(result?.data);
  };

  useEffect(() => {
    getProductData();
  }, []);
  // const product = await getProducts();

  console.log(products);
  return (
    <div>
      <ProductList product={products} />
    </div>
  );
}

export default ProductListView;
