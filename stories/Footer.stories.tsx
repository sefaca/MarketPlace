// components/Footer/Footer.stories.tsx
import React from 'react';
import Footer from '../components/Footer/Footer';

export default {
  title: 'Componentes/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
