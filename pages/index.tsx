import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Bienvenido a MarketPlace</h1>
        <p>Explora nuestra selección de productos digitales.</p>
      </div>
    </>
  );
};

export default HomePage;
