// ProductCard.js
import React from 'react';
import './ProductCrd.css'; // Import the CSS for styling
import Header from './Header';

function Products({ product }) {
  return (
    
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{firesensor}</h3>
      <p>auto detection of fire within few seconds</p>
      <p>Price: ${200}</p>
    </div>
    // hfgyek
    
  );
}

export default Products;
