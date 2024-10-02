import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { products } from '@/data/product';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Buscar el producto basado en el ID
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useCart();

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1, // Se añade una unidad al carrito
    });
    alert(`${product.title} ha sido añadido al carrito!`);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Añadir al carrito
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
