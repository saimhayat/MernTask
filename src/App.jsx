import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailPage from './pages/DetailPage';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* CORRECTED ROUTE PATH HERE */}
          <Route path="/product/:slug" element={<DetailPage />} />
          {/* Additional routes based on your Navbar links. */}
          <Route path="/about" element={<div>About Page Content</div>} />
          <Route path="/web" element={<div>Full Stack Web Development Services</div>} />
          <Route path="/app" element={<div>App Development Services</div>} />
          <Route path="/services" element={<div>All Categories of Services</div>} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;