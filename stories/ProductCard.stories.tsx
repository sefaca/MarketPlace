// components/ProductCard/ProductCard.stories.tsx
import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

export default {
  title: 'Componentes/ProductCard',
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Producto 1',
  description: 'Este es un producto digital interesante.',
  price: 19.99,
};

export const ProductWithLongDescription = Template.bind({});
ProductWithLongDescription.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Producto 2',
  description: 'Este es un producto digital muy interesante que incluye características asombrosas y es ideal para todos los interesados en aprender sobre nuevas tecnologías. ¡No te lo pierdas!',
  price: 29.99,
};

export const ProductWithoutImage = Template.bind({});
ProductWithoutImage.args = {
  image: '', // No se muestra imagen
  title: 'Producto 3',
  description: 'Descripción de un producto sin imagen.',
  price: 39.99,
};
