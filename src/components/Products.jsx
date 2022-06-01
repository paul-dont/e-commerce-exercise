import React from 'react';
import Product from './Product';

const Products = props => {
  const { products } = props;

  return (
    <main className="col-1">
      <h3>Products</h3>
      <div className="items">
        {products.map(product => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </main>
  );
};

export default Products;
