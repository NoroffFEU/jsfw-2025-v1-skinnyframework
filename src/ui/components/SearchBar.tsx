import { FC, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { Link } from 'react-router';
import { ThemeStyles } from 'types/props';

interface SearchBarProps {
  themeStyles: ThemeStyles;
}

const SearchBar: FC<SearchBarProps> = ({ themeStyles }) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  return (
    <div className={themeStyles.searchBar}>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={themeStyles.input}
      />
      <Link to={`/search?q=${encodeURIComponent(searchQuery)}`}>
        <button className={themeStyles.searchButton}>Search</button>
      </Link>
    </div>
  );
};

export default SearchBar;
