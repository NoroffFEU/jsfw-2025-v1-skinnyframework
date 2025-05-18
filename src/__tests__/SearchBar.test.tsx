import { render, screen } from '@testing-library/react';
import SearchBar from '../ui/components/SearchBar';
import { SearchContext } from '../context/SearchContext';
import { ToastProvider } from '../context/ToastContext';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import { test, expect, vi } from 'vitest';

const themeStyles = { searchBar: '', searchButton: '' };

test('SearchBar displays input and triggers toast on no results', () => {
  const setSearchQuery = vi.fn();
  render(
    <MemoryRouter>
      <ToastProvider>
        <SearchContext.Provider value={{ searchQuery: 'abc', setSearchQuery }}>
          <SearchBar themeStyles={themeStyles} filteredProducts={[]} />
        </SearchContext.Provider>
      </ToastProvider>
    </MemoryRouter>
  );
  expect(screen.getByPlaceholderText('Find exactly what you need...')).toBeInTheDocument();
  expect(screen.getByText('Search')).toBeInTheDocument();
  // Toast should appear for no results
  expect(screen.getByText('No products found')).toBeInTheDocument();
});
