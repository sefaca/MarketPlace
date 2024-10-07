import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import { useCart } from '@/context/CartContext';
import {
  Container,
  ImageGallery,
  ProductDetails,
  PriceSection,
  ActionButtons,
  TabContainer,
  TabContent,
  Selectors,
  Selector,
  SelectorOption,
} from '../../components/ProductDetail/ProductDetail.styles'; // Añade tus estilos aquí

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  // Obtener producto desde la API
  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
    alert(`${product.title} ha sido añadido al carrito!`);
  };

  return (
    <>
      <NavBar />
      <Container>
        {/* Galería de imágenes */}
        <ImageGallery>
          <img src={product.image} alt={product.title} />
        </ImageGallery>

        {/* Detalles del producto */}
        <ProductDetails>
          <h1>{product.title}</h1>
          <p>Calificación: ⭐ 4.5 (21,617 reseñas)</p>

          <PriceSection>
            <span className="price">${product.price}</span>
            <span className="discount">21% OFF</span>
          </PriceSection>

          <Selectors>
            <Selector>
              <label>Color:</label>
              <select>
                <option>Space Gray</option>
                <option>Silver</option>
              </select>
            </Selector>
            {/* <div>
              <label>Talla:</label>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XXL</option>
              </select>
            </div> */}
            <Selector>
              <label>Cantidad:</label>
              <SelectorOption type="number" defaultValue={1} min={1} />
            </Selector>
          </Selectors>

          <ActionButtons>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Añadir al carrito
            </button>
            <button className="btn btn-warning">Comprar ahora</button>
          </ActionButtons>
        </ProductDetails>
      </Container>
              {/* Descripción y pestañas */}
              <TabContainer>
          <TabContent>
            <h2>Descripción</h2>
            <p>{product.description}</p>
          </TabContent>
          {/* Aquí puedes agregar más pestañas como información adicional y reseñas */}
        </TabContainer>
      <Footer />
    </>
  );
};

export default ProductDetail;
