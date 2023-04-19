import React from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout';

function App() {

  return (
    <>
    /* Provider */
    <CartProvider >
      
      <BrowserRouter>
        
        <BootstrapNavbar /> 
        <br /> <br /><br /> <br /><br />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorys/:categoryid" element={<ItemListContainer />} />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout/:orderid" element={<Checkout />} />
          <Route path="*" element={<h2>Error 404 - Page not found</h2>} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;
