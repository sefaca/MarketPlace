// components/Button/BuyButton.stories.tsx
import React from 'react';
import BuyButton from '../components/Buttons/BuyButton/BuyButton';

export default {
  title: 'Componentes/BuyButton',
  component: BuyButton,
};

const Template = (args) => <BuyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Comprar Ahora',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: 'Añadir al carrito',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  children: 'Comprar (deshabilitado)',
  onClick: () => alert('Este botón está deshabilitado'),
};
