// pages/order-history.tsx
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { useOrder } from '../context/OrderContext';

const OrderHistoryPage = () => {
  const { orders } = useOrder();

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Historial de Pedidos</h1>
        {orders.length === 0 ? (
          <p>No has realizado ningún pedido.</p>
        ) : (
          <ul className="list-group">
            {orders.map((order) => (
              <li key={order.id} className="list-group-item">
                <h4>Pedido #{order.id}</h4>
                <p>Fecha: {order.date}</p>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.title} - {item.quantity} x ${item.price} = ${item.total}
                    </li>
                  ))}
                </ul>
                <p><strong>Total:</strong> ${order.items.reduce((total, item) => total + item.total, 0)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrderHistoryPage;
