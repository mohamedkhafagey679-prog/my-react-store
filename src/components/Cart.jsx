import React from 'react';

function Cart({ cartItems, totalPrice, onIncrease, onDecrease, onDelete }) {
  return (
    <div style={{ borderTop: '2px solid #333', paddingTop: '20px' }}>
      <h2>سلة التسوق 🛍️</h2>
      {cartItems.length === 0 ? (
        <p>السلة فارغة حالياً.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '500px', marginBottom: '10px', background: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
              
              {/* اسم المنتج وسعره الإجمالي بناءً على الكمية */}
              <span>{item.name} ({item.price * item.quantity} دولار)</span>
              
              {/* أزرار التحكم في الكمية والحذف */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button onClick={() => onDecrease(item)} style={{ padding: '2px 8px' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item)} style={{ padding: '2px 8px' }}>+</button>
                <button onClick={() => onDelete(item)} style={{ padding: '2px 8px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>❌</button>
              </div>

            </div>
          ))}
          <h3>إجمالي الحساب: {totalPrice} دولار</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
