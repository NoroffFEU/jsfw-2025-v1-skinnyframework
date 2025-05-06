import { PageProps } from '../types/props';
import { FC } from 'react';

const Checkout: FC<PageProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>CHECKOUT</h1>
    </>
  );
};

export default Checkout;