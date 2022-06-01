import React, { useState } from 'react';

import './index.css';
import Wrapper from './components/Wrapper';
import Products from './components/Products';
import Basket from './components/Basket';
import data from './data';

function App() {
  const { products } = data;

  return (
    <>
      <Wrapper>
        <Products products={products} />
        <Basket />
      </Wrapper>
    </>
  );
}

export default App;
