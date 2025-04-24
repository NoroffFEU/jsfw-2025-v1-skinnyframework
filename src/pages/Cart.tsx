import { ThemeStyles } from '../types/themeStyles';
import { FC } from 'react';

interface CartProps {
  themeStyles: ThemeStyles;
}

const Cart: FC<CartProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>CART</h1>
    </>
  );
};

export default Cart;
