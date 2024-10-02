// components/ProductCard/ProductCard.tsx
import React from 'react';
import {
  Card as StyledCard,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
} from './ProductCard.styles'; // Importamos los estilos
import BuyButton from '../Buttons/BuyButton/BuyButton';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <StyledCard>
      <CardImage src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <CardPrice>${price.toFixed(2)}</CardPrice>
        <BuyButton primary onClick={() => alert('Añadido al carrito!')}>
          Añadir al carrito
        </BuyButton>
      </CardBody>
    </StyledCard>
  );
};

export default ProductCard;
