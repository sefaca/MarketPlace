import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import ProductList from '@/components/ProdcutList/ProductList';
import SearchBar from '@/components/SearchBar/SearchBar';

const HomePage = () => {

    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const products = [
        { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'https://via.placeholder.com/150', category: 'Software'},
        { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 200, image: 'https://via.placeholder.com/150', category: 'E-books'},
        { id: 3, title: 'Producto 3', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150', category: 'Software'},
        { id: 4, title: 'Producto 4', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150', category: 'Cursos'},
        { id: 5, title: 'Producto 5', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150', category: 'E-books'},
        { id: 6, title: 'Producto 6', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150', category: 'Cursos'},
        { id: 7, title: 'Producto 7', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150', category: 'E-books'},
        { id: 8, title: 'Producto 8', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150', category: 'Software'},
      ];

      const categories = ['Software', 'E-books', 'Cursos'];

  return (
    <>
<NavBar />
    <div className="container mt-4">
        <h1>Productos Digitales</h1>
            {/* SearchBar */}
            <SearchBar
                onSearch={setSearchText}
                onCategoryChange={setSelectedCategory}
                categories={categories}
            />
            {/* ProductList */}
            <ProductList
                products={products}
                searchText={searchText}
                selectedCategory={selectedCategory}
            />
            </div>
            <Footer />
    </>
  );
};

export default HomePage;
