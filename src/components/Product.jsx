import React from 'react';

const Product = props => {
  const { product, onAddPrd } = props;

  return (
    <div className="item">
      <img src={product.imgUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <div>{product.price} €</div>
      <button onClick={() => onAddPrd(product)} className="btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
