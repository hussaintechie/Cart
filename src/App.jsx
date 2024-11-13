import { Header } from "./cart/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './cart/Home';
import { Viewcart } from './cart/Viewcart'; // Ensure you import the Cart component
import { useState,createContext } from 'react';
export const cartContext=createContext();

function App() {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

  return (
    <cartContext.Provider value={{cart, setCart}}>
       <BrowserRouter>
        <Header cart={cart}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart  />} /> {/* Corrected typo */}
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
