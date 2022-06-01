import React, { useState, useEffect } from 'react';

import './index.css';
import Wrapper from './components/Wrapper';
import Products from './components/Products';
import Basket from './components/Basket';
import data from './data';

function App() {
  const { products } = data;

  const [basketItems, setBasketItems] = useState(() => {
    // Getting stored value
    const saved = localStorage.getItem('data');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // Storing basket into localStorage
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(basketItems));
  });

  // Adding products to basket functionality
  const onAddPrd = product => {
    const exist = basketItems.find(item => item.id === product.id);
    if (exist) {
      setBasketItems(
        basketItems.map(item =>
          item.id === product.id
            ? {
                ...exist,
                quantity: exist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, quantity: 1 }]);
    }
  };

  // Removing products from the basket functionality
  const onRemovePrd = product => {
    const exist = basketItems.find(item => item.id === product.id);
    if (exist.quantity === 1) {
      setBasketItems(basketItems.filter(item => item.id !== product.id));
    } else {
      setBasketItems(
        basketItems.map(item =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  const onBuy = () => {
    setBasketItems([]);
    localStorage.clear();
  };

  return (
    <>
      <Wrapper>
        <Products products={products} onAddPrd={onAddPrd} />
        <Basket
          basketItems={basketItems}
          onAddPrd={onAddPrd}
          onRemovePrd={onRemovePrd}
          onBuy={onBuy}
        />
      </Wrapper>
    </>
  );
}

export default App;
