import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import ProductList from '@/components/ProdcutList/ProductList';

const HomePage = () => {
    const products = [
        { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 200, image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Producto 3', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 4, title: 'Producto 4', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 5, title: 'Producto 5', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 6, title: 'Producto 6', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 7, title: 'Producto 7', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 8, title: 'Producto 8', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/150' },

        // Más productos...
      ];

  return (
    <>
<NavBar />
            <div className="container mt-4">
                <h1>Productos Digitales</h1>
                {/* Renderizar la lista de productos usando ProductList */}
                <ProductList products={products} />
            </div>
            <Footer />
    </>
  );
};

export default HomePage;
