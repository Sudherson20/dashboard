import React from 'react';
import './StockNumbers.css';

function StockNumbers() {
  return (
    <div className="stock-list">
      <h2>Stock Numbers</h2>
      <ul>
        <li>Low Stock Items: 12</li>
        <li>Item Categories: 6</li>
        <li>Refunded Items: 1</li>
      </ul>
    </div>
  );
}

export default StockNumbers;
