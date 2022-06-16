import React from 'react';

const XMLMapping = require('xml-mapping');

const Basket = props => {
  const { basketItems, onAddPrd, onRemovePrd, onClear } = props;
  const totalPrice = basketItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const saved = basketItems.map(item => {
    return { id: item.id, qty: item.quantity };
  });
  // On Buy send back-end the needed information excluding the product img
  const onBuyHandler = () => {
    console.log(XMLMapping.dump(saved));
    onClear();
  };
  const number = Intl.NumberFormat('gr-el', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <aside className="col-2">
      <h2>Basket</h2>
      <hr />
      <div className="empty">
        {basketItems.length === 0 && <div>Your Basket is empty</div>}
      </div>
      {basketItems.map(item => (
        <div key={item.id} className="flex">
          <div className="col-2">{item.name}</div>
          <div className="col-2 flex-center">
            <button className="add" onClick={() => onAddPrd(item)}>
              +
            </button>{' '}
            <button className="rem" onClick={() => onRemovePrd(item)}>
              -
            </button>
          </div>
          <div className="col-2 quant">
            {item.quantity} <small>x</small> {number.format(item.price)}
          </div>
        </div>
      ))}
      <hr />
      {basketItems.length !== 0 && (
        <div>
          <div className="total">
            Total:{' '}
            {totalPrice >= 100
              ? number.format(totalPrice - totalPrice * 0.1)
              : number.format(totalPrice)}
          </div>
          <div className="total">
            {totalPrice >= 100 ? '10% Discount Applied 💰' : ''}
          </div>
          <button className="buy btn btn-primary" onClick={onBuyHandler}>
            Buy
          </button>

          <button className="clear buy" onClick={onClear}>
            Clear Basket
          </button>
        </div>
      )}
    </aside>
  );
};

export default Basket;
