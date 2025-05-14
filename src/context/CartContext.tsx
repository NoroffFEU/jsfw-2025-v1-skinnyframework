import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from 'react';
import { ProductProps } from '../services/api';
import { useToast } from './ToastContext';

export interface CartItem extends ProductProps {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCostDisplay: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []; // if there are cartitems stored in LS apply those
  });

  const { addToast } = useToast();

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductProps) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    addToast('Product added to cart!', 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    addToast("What, you didn't want it?", 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item)),
    );

    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;
    const isIncreasing = quantity > cartItem.quantity;
    addToast(
      isIncreasing ? 'Item quantity increased.' : 'Item quantity reduced.',
      'info',
    );
  };

  const clearCart = () => {
    setCart([]);
    addToast('Nada in the cart!', 'info');
  };

  const totalCostDisplay = () => {
    const totalCost = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    ).toFixed(2)
    return `$${totalCost}`;
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalCostDisplay }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
