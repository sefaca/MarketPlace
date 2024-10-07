import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import { useOrder } from '@/context/OrderContext';
import CheckoutButton from '@/components/Buttons/CheckoutButton';
import { loadStripe } from '@stripe/stripe-js';
import { InputFormControl } from './checkout.styles';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { addOrder } = useOrder();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      })),
    };
  
    try {
      addOrder(order);
  
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }), // Asegúrate de que estás enviando "items" en lugar de "cart"
      });
  
      const { id: sessionId } = await res.json(); // Cambié "sessionId" a "id" para que coincida con el JSON que retorna el API
  
      const stripe = await stripePromise;
      const { error } = await stripe?.redirectToCheckout({ sessionId });
  
      if (error) {
        console.error('Stripe Checkout error:', error);
      }
    } catch (error) {
      console.error('Error procesando el pedido:', error);
    }
  
    clearCart();
  };
  

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p>No hay productos en tu carrito.</p>
        ) : (
          <div>
            <h2>Resumen del pedido</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                </li>
              ))}
            </ul>
            <h3>Total: ${totalPrice}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <InputFormControl
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                  placeholder='"Ej. Sergio"'
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Dirección</label>
                <InputFormControl
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                  placeholder='"Ej. Ronda de Triana"'
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <InputFormControl
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                  placeholder='"Ej. aaa@gmail.com"'
                />
              </div>
              <CheckoutButton/>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
