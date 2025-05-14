import { PageProps } from '../types/props';
import { FC, useState } from 'react';
import Wrapper from '../ui/components/Wrapper';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Checkout: FC<PageProps> = ({ themeStyles }) => {
  const { cart, clearCart, totalCostDisplay } = useCart();
  const navigate = useNavigate();
  const [orderTotal, setOrderTotal] = useState('');

  if (!cart) {
    useEffect(() => {
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }, [])

    return (
      <Wrapper themeStyles={themeStyles}>
        <div>
          <p>
            Not sure what you're doing here.
          </p>
        </div>
      </Wrapper>
    )
  } else {
    useEffect(() => {
      setOrderTotal(totalCostDisplay());

      setTimeout(() => {
        clearCart();
      }, 500)
    }, []);

    return (
      <Wrapper themeStyles={themeStyles}>
        <div>
          <p className={themeStyles.text}>
            Thank you for your order! Your order has been placed successfully.
          </p>
          <p>
            the total price of your order is: {orderTotal}
          </p>
          <p>
            We may or may not send it to you. Good Luck with that!
          </p>
          <button
            className={themeStyles.button}
            onClick={() => navigate('/')}>
            Spend some more money
          </button>
        </div>
      </Wrapper>
    );
  }

};

export default Checkout;
