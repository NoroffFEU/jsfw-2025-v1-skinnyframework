import React, { FC, ReactNode } from 'react';
import { ProductProvider } from './ProductContext';
import SearchProvider from './SearchContext';
import { ToastProvider } from './ToastContext';
import { CartProvider } from './CartContext';

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  return (
    <ProductProvider>
      <SearchProvider>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </SearchProvider>
    </ProductProvider>
  );
};

export default ContextProvider;
