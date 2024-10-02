import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, id }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <Link href={`/product/${id}`} legacyBehavior>
          <button className="btn btn-primary">Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
