import React from 'react';

export default function Navbar({ setView, setCatalogFilter }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#111', color: '#fff', alignItems: 'center' }}>
      <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => setView('home')}>CAMEXPERT</h2>
      <div>
        <button onClick={() => { setView('products'); setCatalogFilter('All'); }} style={btnStyle}>Catalog</button>
        <button onClick={() => { setView('products'); setCatalogFilter('Sony'); }} style={btnStyle}>Sony</button>
        <button onClick={() => { setView('products'); setCatalogFilter('Canon'); }} style={btnStyle}>Canon</button>
      </div>
    </nav>
  );
}

const btnStyle = { background: 'none', border: 'none', color: '#fff', margin: '0 15px', cursor: 'pointer', fontSize: '16px' };
