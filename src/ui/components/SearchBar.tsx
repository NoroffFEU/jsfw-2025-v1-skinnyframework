import React, { useState } from 'react';

interface SearchBarProps {  onSearch?: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className="search-bar"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search products..."
        aria-label="Search products"
        style={{
          padding: '5px 10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />
      <button
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          marginLeft: '5px',
        }}
      >
        {/* Inline SVG for search icon */}
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.42,12.58 14.5,13.73L20.71,20L19,21.71L12.73,15.5C11.58,16.42 10.11,17 8.5,17A6.5,6.5 0 0,1 2,10.5A6.5,6.5 0 0,1 8.5,4A6.5,6.5 0 0,1 9.5,3M8.5,6A4.5,4.5 0 0,0 4,10.5A4.5,4.5 0 0,0 8.5,15A4.5,4.5 0 0,0 13,10.5A4.5,4.5 0 0,0 8.5,6Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
