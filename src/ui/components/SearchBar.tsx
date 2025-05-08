import { FC, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { Link } from 'react-router';
import { ThemeStyles } from '../../types/props';
import Wrapper from './Wrapper';

interface SearchBarProps {
  themeStyles: ThemeStyles;
}

const SearchBar: FC<SearchBarProps> = ({ themeStyles }) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  return (
    <Wrapper themeStyles={themeStyles}>
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
    </Wrapper>
  );
};

export default SearchBar;
