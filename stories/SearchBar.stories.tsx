import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from '../components/SearchBar/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (text: string) => console.log('Buscar: ', text),
  onCategoryChange: (category: string) => console.log('Categoría: ', category),
  categories: ['Software', 'E-books', 'Cursos'],
};
