import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import { createContext, useState } from "react";


export const CountContext = createContext(0); 

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
        <CountContext.Provider value={{ count: count, setCount: setCount }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product/:slug" element={<DetailPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CountContext.Provider>
  );
}