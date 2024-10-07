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
    products: Product[];
    searchText: string;
    selectedCategory: string;
  }

  const ProductList: React.FC<ProductListProps> = ({ products, searchText, selectedCategory }) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
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
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price} id={0}            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
