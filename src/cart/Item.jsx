import React, { useContext } from 'react';
import { cartContext } from '../App'; // Ensure you import the cartContext


export const Item = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className='item'>
      <div className="img">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="detail">
        <h3>{product.name}</h3>
        <p>Price Rs: {product.amount}</p>
        {
          cart.includes(product) ? (
            <button onClick={removeCart} className='remove'>Remove from cart</button>
          ) : (
            <button onClick={addCart}>Add to cart</button>
          )
        }
      </div>
    </div>
  );
};
