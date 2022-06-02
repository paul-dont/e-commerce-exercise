import React from 'react';

const Basket = props => {
  const { basketItems, onAddPrd, onRemovePrd, onBuy } = props;

  const totalPrice = basketItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  // On Buy send back-end the needed information excluding the product img
  const onBuyHandler = () => {
    console.dirxml(
      basketItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        // totalPrice: item.price * item.quantity, // if total price for each item is needed
      })),
      'This is the solution to sending the data to the back-end using the dirxml method'
    );
    onBuy();
  };

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
            {item.quantity} <small>x</small> {item.price} €
          </div>
        </div>
      ))}
      <hr />
      <div className="total">
        Total: {totalPrice >= 100 ? totalPrice - totalPrice * 0.1 : totalPrice}{' '}
        €
      </div>
      <div className="total">
        {totalPrice >= 100 ? '10% Discount Applied 💰' : ''}
      </div>
      <button className="buy btn btn-primary" onClick={onBuyHandler}>
        Buy
      </button>

      <button className="clear buy" onClick={onBuy}>
        Clear Basket
      </button>
    </aside>
  );
};

export default Basket;
