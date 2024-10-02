import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';

const HomePage = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Producto 1',
      description: 'Este es el primer producto.',
      price: 19.99,
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Producto 2',
      description: 'Este es el segundo producto.',
      price: 29.99,
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Producto 3',
      description: 'Este es el tercer producto.',
      price: 39.99,
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Producto 3',
        description: 'Este es el tercer producto.',
        price: 39.99,
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Producto 3',
        description: 'Este es el tercer producto.',
        price: 39.99,
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Producto 3',
        description: 'Este es el tercer producto.',
        price: 39.99,
      },
  ];

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Productos Digitales</h1>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-3">
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
