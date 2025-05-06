import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import { ToastProvider } from '../context/ToastContext';
import { CartProvider } from '../context/CartContext';
import Product from '../pages/Product';
import * as api from '../services/api';
import { vi, test, expect } from 'vitest';
import '@testing-library/jest-dom';

// Create a fake product object that matches the ProductProps type structure
const fakeProduct = {
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

// Spy on the API call to return our fake product
vi.spyOn(api, 'getProductById').mockResolvedValue(fakeProduct);

test('adds product to cart and persists it in localStorage', async () => {
  // Render the Product component inside a MemoryRouter with a route that supplies the id parameter.
  render(
    <MemoryRouter initialEntries={['/product/1']}>
      <ToastProvider>
        <CartProvider>
          <Routes>
            <Route
              path="/product/:id"
              element={
                <Product
                  themeStyles={{
                    text: '',
                    heading: '',
                    button: '',
                    pageBody: '',
                    image: '',
                  }}
                />
              }
            />
          </Routes>
        </CartProvider>
      </ToastProvider>
    </MemoryRouter>
  );

  // Wait for the product title to appear (ensuring API fetch is complete)
  await waitFor(() =>
    expect(screen.getByText('Fake Product')).toBeInTheDocument()
  );

  // Click the "Add to Cart" button
  const addButton = screen.getByRole('button', { name: /add to cart/i });
  fireEvent.click(addButton);

  // Check for the toast notification
  expect(
    await screen.findByText(/product added to cart!/i)
  ).toBeInTheDocument();

  // Verify that the cart persisted in localStorage
  await waitFor(() => {
    const storedCart = localStorage.getItem('cart');
    expect(storedCart).not.toBeNull();
    const parsedCart = JSON.parse(storedCart!);
    expect(parsedCart).toHaveLength(1);
    expect(parsedCart[0].id).toBe('1');
    expect(parsedCart[0].quantity).toBe(1);
  });
});