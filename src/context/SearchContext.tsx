import { createContext, useState, ReactNode, FC } from 'react';

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  searchQuery: '',
  setSearchQuery: () => { },
});

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}