import React from 'react';

const Products = props => {
  const { products } = props;

  return (
    <main className="col-1">
      <h3>Products</h3>
      <div className="items">
        {products.map(product => {
          return (
            <div className="item">
              <img src={product.imgUrl} alt={product.name} />
              <div>{product.name}</div>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
