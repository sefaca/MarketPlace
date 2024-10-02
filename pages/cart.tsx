// pages/cart.tsx
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Carrito de Compras</h1>
        <Cart />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
