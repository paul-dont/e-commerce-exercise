import React from 'react';

const Product = props => {
  const { product } = props;

  return (
    <div className="item">
      <img src={product.imgUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <div>{product.price}€</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
