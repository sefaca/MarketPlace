// pages/index.tsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductList from '@/components/ProdcutList/ProductList';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Productos Digitales</h1>

        <input
          type="text"
          placeholder="Buscar productos"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control mb-4"
        />

        <ProductList searchText={searchText} selectedCategory={selectedCategory} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
