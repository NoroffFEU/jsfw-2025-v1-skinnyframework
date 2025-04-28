import { PageProps } from '../types/props';
import { FC } from 'react';

const Cart: FC<PageProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>CART</h1>
    </>
  );
};

export default Cart;
