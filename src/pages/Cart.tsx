import { FC } from 'react';
import { useCart } from '../context/CartContext';
import Wrapper from '../ui/components/Wrapper';


interface CartPageProps {
  themeStyles: { [key: string]: string };
}

const Cart: FC<CartPageProps> = ({ themeStyles }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Wrapper themeStyles={themeStyles}>

      <div className={themeStyles.pageBody}>
        <h1 className={themeStyles.heading}>Your Cart</h1>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map(item => (
          <div key={item.id} className={themeStyles.card}>
            <h2 className={themeStyles.text}>{item.title}</h2>
            <p className={themeStyles.text}>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
            <div>
              <button
                className={themeStyles.button}
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.quantity > 1 ? item.quantity - 1 : 1,
                  )
                }
              >
                -
              </button>
              <button
                className={themeStyles.button}
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className={themeStyles.button}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
        {cart.length > 0 && (
          <div>
            <h3>Total: ${totalCost.toFixed(2)}</h3>
            <button className={themeStyles.button}>Checkout</button>
            <button
              className={themeStyles.button}
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>

          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
