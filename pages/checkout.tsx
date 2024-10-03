// pages/checkout.tsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import { useOrder } from '@/context/OrderContext';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const order = {
      id: Date.now(), // Genera un ID único basado en el tiempo actual
      date: new Date().toLocaleDateString(),
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      }))
    };
  
    addOrder(order);
    alert('Compra realizada con éxito');
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
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Realizar Pago</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
