import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { getProducts, ProductProps } from '../services/api';

interface ProductsContextProps {
  products: ProductProps[];
  loading: boolean;
  error: string | null;
  refetchProducts: () => void;
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  loading: false,
  error: null,
  refetchProducts: () => {},
});

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setError(null);
    } catch (err: any) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Memoize the context value so that consumers don't re-render unnecessarily.
  const value = useMemo(
    () => ({
      products,
      loading,
      error,
      refetchProducts: fetchProducts,
    }),
    [products, loading, error],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
