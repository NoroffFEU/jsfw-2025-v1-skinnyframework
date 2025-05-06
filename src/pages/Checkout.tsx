// src/pages/Checkout.tsx

import React from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { PageProps } from '../types/props';

const Checkout: React.FC<PageProps> = ({ themeStyles }) => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Calculate the total cost over all cart items.
  const totalCost = cart.reduce((acc, item) => {
    const price = item.discountedPrice < item.price ? item.discountedPrice : item.price;
    return acc + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout-success');
  };

  // When the cart is empty, display a message.
  if (cart.length === 0) {
    return <div className={themeStyles.text}>Your cart is empty.</div>;
  }

  return (
    <div className={themeStyles.pageBody}>
      <h1 className={themeStyles.heading}>Checkout</h1>
      <div>
        {cart.map(item => (
          <div key={item.id} className={themeStyles.card}>
            <h2 className={themeStyles.text}>{item.title}</h2>
            <p className={themeStyles.text}>Quantity: {item.quantity}</p>
            <p className={themeStyles.text}>
              Price: ${ (item.discountedPrice < item.price ? item.discountedPrice : item.price).toFixed(2) }
            </p>
          </div>
        ))}
      </div>
      <h2 className={themeStyles.heading}>Total: ${totalCost.toFixed(2)}</h2>
      <button className={themeStyles.button} onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
