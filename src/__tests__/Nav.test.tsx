import { render, screen } from '@testing-library/react';
import Nav from '../ui/components/Nav';
import { MemoryRouter } from 'react-router';
import { CartProvider } from '../context/CartContext';
import { ToastProvider } from '../context/ToastContext';
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
      <ToastProvider>
        <CartProvider>
          <Nav themeStyles={themeStyles} routes={routes} />
        </CartProvider>
      </ToastProvider>
    </MemoryRouter>,
  );
  // There should be two navigation links (Home and Contact)
  const navLinks = screen.getAllByRole('link');
  // The first two links are navigation, the last is the cart icon
  expect(navLinks[0]).toHaveAttribute('href', '/');
  expect(navLinks[1]).toHaveAttribute('href', '/contact');
  // The cart icon link
  expect(navLinks[2]).toHaveAttribute('href', '/cart');
  expect(navLinks[2]).toHaveTextContent('🛒');
});
