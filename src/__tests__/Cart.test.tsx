import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ToastProvider } from '../context/ToastContext';
import { CartProvider, useCart } from '../context/CartContext';
import Cart from '../pages/Cart';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';

// Fake cart item
const fakeItem = {
  id: '1',
  title: 'Fake Product',
  description: 'Fake description',
  price: 100,
  discountedPrice: 80,
  image: { url: 'fake-url', alt: 'fake product' },
  reviews: [],
  rating: 4.5,
  tags: ['electronics', 'gadget'],
};

test('updates item quantity and removes item with toast notifications', async () => {
  // Initialize the CartProvider inside renderHook to access cart actions
  const { result } = renderHook(() => useCart(), {
    wrapper: ({ children }) => (
      <ToastProvider>
        <CartProvider>{children}</CartProvider>
      </ToastProvider>
    ),
  });

  // Add item to cart using the context hook from renderHook
  result.current.addToCart(fakeItem);

  // Render the cart UI after modifying cart state
  render(
    <MemoryRouter>
      <ToastProvider>
        <CartProvider>
          <Cart themeStyles={{ text: '', heading: '', button: '', pageBody: '', card: '' }} />
        </CartProvider>
      </ToastProvider>
    </MemoryRouter>
  );

  // Wait for the cart item to appear
  await waitFor(() => expect(screen.getByText('Fake Product')).toBeInTheDocument());

  // Click the "+" button to increase quantity
  fireEvent.click(screen.getByText('+'));

  // Check for the "Item quantity increased!" toast
  expect(await screen.findByText(/item quantity increased!/i)).toBeInTheDocument();

  // Click the "Remove" button
  fireEvent.click(screen.getByText(/remove/i));

  // Check for the "Item removed from cart." toast
  expect(await screen.findByText(/item removed from cart./i)).toBeInTheDocument();
});