import { ThemeStyles } from '../types/themeStyles';
import { FC } from 'react';

interface CheckoutProps {
  themeStyles: ThemeStyles;
}

const Checkout: FC<CheckoutProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>CHECKOUT</h1>
    </>
  );
};

export default Checkout;
