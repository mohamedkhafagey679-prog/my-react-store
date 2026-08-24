import React, { useState } from "react";
import "./App.css"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased">
      <Navbar cartCount={cartCount} />
      <Hero />
      <main className="pb-24">
        <Products addToCart={addToCart} />
      </main>
    </div>
  );
}
