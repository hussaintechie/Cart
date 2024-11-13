import React, { useState } from 'react';
import { Item } from './Item';
import data from '../assets/product.json';
import '../cart/item.css';
import '../cart/home.css';

export const Home = () => {
  return (
    <div className='product-container'>
      {data.map((product) => (
        <Item key={product.id} product={product}  />
      ))}
    </div>
  );
};
