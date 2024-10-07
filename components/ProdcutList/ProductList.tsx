// components/ProductList/ProductList.tsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductListProps {
  searchText: string;
  selectedCategory: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchText, selectedCategory }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from external API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products by search text and selected category
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [products, searchText, selectedCategory]);

  return (
    <div className="row">
      {filteredProducts.map((product) => (
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
  );
};

export default ProductList;
