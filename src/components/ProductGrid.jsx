import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import '../index.css';

const ProductGrid = () => {
  return (
    <div className="container">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;