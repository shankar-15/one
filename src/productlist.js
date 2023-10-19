import React from 'react';
import Products from './Products';

const products = [
  
];

function productlist() {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Products key={index} product={product} />
      ))}
    </div>
  );
}

export default productlist;
