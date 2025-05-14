import { PageProps } from '../types/props';
import { FC } from 'react';
import Wrapper from '../ui/components/Wrapper';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Checkout: FC<PageProps> = ({ themeStyles }) => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Wrapper themeStyles={themeStyles}>
      <>
        <h1 className={themeStyles.heading}>CHECKOUT</h1>
        <div>
          <p className={themeStyles.text}>
            Thank you for your order! Your order has been placed successfully.
          </p>
          <button
            className={themeStyles.button}
            onClick={() => navigate('/')}>
            Spend some more money
          </button>
        </div>
      </>
    </Wrapper>
  );
};

export default Checkout;
