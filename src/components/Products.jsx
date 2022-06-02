import React from 'react';
import Product from './Product';

const Products = props => {
  const { products, onAddPrd } = props;

  return (
    <main className="col-1">
      <h2>Products</h2>
      <div className="items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onAddPrd={onAddPrd}
          ></Product>
        ))}
      </div>
    </main>
  );
};

export default Products;
