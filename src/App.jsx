// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import products from './products'; 
import Products from './components/Products'; 

function App() {
  const [cart, setCart] = useState([]);

  // الفانكشن الجديدة لإضافة المنتجات
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1>متجري الإلكتروني</h1>
        <div className="cart-icon">
          🛒 السلة <span>({cart.length})</span>
        </div>
      </header>

      <main className="store-container">
        <h2>المنتجات المتاحة</h2>
        
        {/* بنمرر الفانكشن كـ Prop للمكون عشان يقدر يستخدمها */}
        <Products productsList={products} onAddToCart={addToCart} />
        
      </main>
    </div>
  );
}

export default App;
