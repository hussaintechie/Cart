import React from 'react';
import '../cart/Viewcart.css';
import data from '../assets/product.json'; // Ensure data is imported correctly
import { cartContext } from '../App'; 
import  { useContext } from 'react';

export const Viewcart = () => {
  const { cart } = useContext(cartContext);
  const totalAmount = cart.reduce((total, product) => total + product.amount, 0);

  return (
    <>
      <h1>Cart Product</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="imgs">
              <img src={product.picture} alt={product.name} />
            </div>
            <div className="product-detail">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amount}</p>
            </div>
          </div>
        ))}
        <h2>Total amount: Rs {totalAmount}</h2>
      </div>
    </>
  );
};
