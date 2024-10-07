// components/ProductList/ProductList.stories.tsx
import React from 'react';
import ProductList from '../components/ProdcutList/ProductList';

export default {
  title: 'Componentes/ProductList',
  component: ProductList,
};

const Template = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 200, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Producto 3', description: 'Descripción del producto 3', price: 300, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Producto 4', description: 'Descripción del producto 4', price: 400, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Producto 5', description: 'Descripción del producto 5', price: 500, imageUrl: 'https://via.placeholder.com/150' },
  ],
};
