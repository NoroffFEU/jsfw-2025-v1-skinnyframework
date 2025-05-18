import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../ui/components/Nav';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';

const routes = [
  { path: '/', element: <div>Home</div>, showInNav: true },
  { path: '/contact', element: <div>Contact</div>, showInNav: true },
];

const themeStyles = {
  nav: '',
  navList: '',
  navLink: '',
  activeLink: '',
  cartIcon: '',
  hamburger: '',
  navOpen: '',
};

test('Nav renders navigation links and CartIcon', () => {
  render(
    <MemoryRouter>
      <Nav themeStyles={themeStyles} routes={routes} />
    </MemoryRouter>,
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('🛒')).toBeInTheDocument();
});
