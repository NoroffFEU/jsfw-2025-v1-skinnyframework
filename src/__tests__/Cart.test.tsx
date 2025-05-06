import {
    render,
    screen,
    fireEvent,
    waitFor,
    renderHook,
    act,
  } from '@testing-library/react';
  import { MemoryRouter } from 'react-router';
  import { ToastProvider } from '../context/ToastContext';
  import { CartProvider, useCart } from '../context/CartContext';
  import Cart from '../pages/Cart';
  import { test, expect } from 'vitest';
  import '@testing-library/jest-dom';
  
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
    // Use renderHook to access the cart actions in context.
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => (
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      ),
    });
  
    // Add the fake item to the cart.
    act(() => {
      result.current.addToCart(fakeItem);
    });
  
    // Render the Cart page for user interaction.
    render(
      <MemoryRouter>
        <ToastProvider>
          <CartProvider>
            <Cart
              themeStyles={{
                text: '',
                heading: '',
                button: '',
                pageBody: '',
                card: '',
              }}
            />
          </CartProvider>
        </ToastProvider>
      </MemoryRouter>
    );
  
    // Wait for the cart item to appear in the UI.
    await waitFor(() =>
      expect(screen.getByText('Fake Product')).toBeInTheDocument()
    );
  
    // Click the "+" button to increase quantity (from 1 to 2).
    act(() => {
      fireEvent.click(screen.getByText('+'));
    });
  
    // Check that the "Item quantity increased." toast appears.
    expect(
      await screen.findByText(/Item quantity increased\./i)
    ).toBeInTheDocument();
  
    // Click the "-" button to decrease quantity (from 2 to 1).
    act(() => {
      fireEvent.click(screen.getByText('-'));
    });
  
    // Check that the "Item quantity reduced." toast appears.
    expect(
      await screen.findByText(/Item quantity reduced\./i)
    ).toBeInTheDocument();
  
    // Click the "Remove" button to remove the item completely.
    act(() => {
      fireEvent.click(screen.getByText(/remove/i));
    });
  
    // Check that the removal toast appears, which should match your context code.
    expect(
      await screen.findByText(/What, you didn't want it\?/i)
    ).toBeInTheDocument();
  });