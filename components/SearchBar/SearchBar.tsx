import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCategoryChange, categories }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchText}
        onChange={handleSearchChange}
        style={{ padding: '10px', width: '250px', marginRight: '10px' }}
      />
      <select value={selectedCategory} onChange={handleCategoryChange} style={{ padding: '10px' }}>
        <option value="">Todas las categorías</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
