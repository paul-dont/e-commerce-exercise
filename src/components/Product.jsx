import React from 'react';

const Product = props => {
  const { product, onAddPrd } = props;
  const number = Intl.NumberFormat('gr-el', {
    style: 'currency',
    currency: 'EUR',
  });
  return (
    <div className="item">
      <img src={product.imgUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <div>
        <strong>{number.format(product.price)}</strong>
      </div>
      <button onClick={() => onAddPrd(product)} className="btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
