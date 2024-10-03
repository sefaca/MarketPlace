// pages/success.tsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const SuccessPage = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Solo se ejecuta en el lado del cliente
    const id = new URLSearchParams(window.location.search).get('session_id');
    setSessionId(id);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu pedido se ha procesado con éxito.</p>
        {sessionId && <p>ID de la sesión: {sessionId}</p>}
        <p>Recibirás un correo de confirmación pronto.</p>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
