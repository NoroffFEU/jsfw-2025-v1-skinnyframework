import { FC, useContext, useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { Link } from 'react-router';
import { ThemeStyles } from '../../types/props';
import { useToast } from '../../context/ToastContext'

interface SearchBarProps {
  themeStyles: ThemeStyles;
  filteredProducts: any[];
}

const SearchBar: FC<SearchBarProps> = ({ themeStyles, filteredProducts }) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { addToast } = useToast();

  useEffect(() => {
    if (searchQuery && filteredProducts.length === 0) {
      addToast('No products found',
        'error',
      );
    }
  }
    , [filteredProducts]);

  return (
    <div className={themeStyles.searchBar}>
      <input
        type="text"
        placeholder="Find exactly what you need..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Link to={`/search?q=${encodeURIComponent(searchQuery)}`}>
        <button className={themeStyles.searchButton}>Search</button>
      </Link>
    </div>
  );
};

export default SearchBar;
