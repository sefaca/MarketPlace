import React from 'react';
import Link from 'next/link';
import { Card, CardImage, CardBody, CardTitle, CardPrice, CardDescription } from './ProductCard.styles';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, id }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>{price} €</CardPrice>
        <Link href={`/product/${id}`} legacyBehavior>
          <button className="btn btn-primary">Ver detalles</button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
