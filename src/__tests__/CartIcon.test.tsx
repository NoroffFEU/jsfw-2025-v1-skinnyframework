import { render, screen } from '@testing-library/react';
import CartIcon from '../ui/components/CartIcon';
import { CartProvider } from '../context/CartContext';
import { ToastProvider } from '../context/ToastContext';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';

test('CartIcon displays correct item count', () => {
  // Mock themeStyles
  const themeStyles = { cartIcon: '' };

  // Render CartIcon inside CartProvider and ToastProvider
  render(
    <ToastProvider>
      <CartProvider>
        <CartIcon themeStyles={themeStyles} />
      </CartProvider>
    </ToastProvider>
  );

  // Initially, cart count should not be visible
  expect(screen.queryByText(/\d+/)).not.toBeInTheDocument();
});
