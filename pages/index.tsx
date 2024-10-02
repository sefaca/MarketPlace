import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import Footer from '../components/Footer/Footer';
import { products } from '@/data/product';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Productos Digitales</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
