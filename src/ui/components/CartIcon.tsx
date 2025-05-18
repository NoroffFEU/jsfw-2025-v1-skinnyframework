/**
 * CartIcon component displays the cart icon and item count.
 * @param themeStyles - Theme styles object
 */
import { FC } from 'react';
import { useCart } from '../../context/CartContext';

interface CartIconProps {
  themeStyles: { [key: string]: string };
}

const CartIcon: FC<CartIconProps> = ({ themeStyles }) => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={themeStyles.cartIcon}>
      <a href="/cart">🛒</a>
      {itemCount > 0 && <span> {itemCount}</span>}
    </div>
  );
};

export default CartIcon;
