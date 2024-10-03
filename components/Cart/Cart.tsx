// components/Cart.tsx
import React from 'react';
import { CartContainer, CartItem, TotalContainer } from './CartStyles'; // Importar los estilos
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id}>
            <div>
              <p>{item.title}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <div>
              <p>Precio: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
  <>
    <TotalContainer>
      <p>Total: ${totalPrice}</p>
      <button onClick={clearCart} className="btn btn-warning">
        Vaciar Carrito
      </button>
    </TotalContainer>
    <Link href="/checkout">
      <button className="btn btn-success mt-3">Proceder al Pago</button>
    </Link>
  </>
)}
    </CartContainer>
  );
};

export default Cart;
