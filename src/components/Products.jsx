// src/components/Products.jsx
import React from 'react';

// استقبلنا الـ Prop الجديد هنا بين الأقواس
function Products({ productsList, onAddToCart }) {
  return (
    <div className="products-grid">
      {productsList.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p className="product-price">{product.price} جنيه</p>
          
          {/* ضفنا حدث الـ onClick وتشغيل الفانكشن مع تمرير المنتج الحالي */}
          <button 
            className="add-to-cart-btn" 
            onClick={() => onAddToCart(product)}
          >
            إضافة للسلة 🛒
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
