// components/ProductList/ProductList.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListContainer } from './ProdrctList.styles';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
