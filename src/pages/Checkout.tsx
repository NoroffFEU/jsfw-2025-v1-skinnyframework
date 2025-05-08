import { PageProps } from '../types/props';
import { FC } from 'react';
import Wrapper from '../ui/components/Wrapper';

const Checkout: FC<PageProps> = ({ themeStyles }) => {
  return (
    <Wrapper themeStyles={themeStyles}>
      <>
        <h1 className={themeStyles.heading}>CHECKOUT</h1>
      </>
    </Wrapper>
  );
};

export default Checkout;
