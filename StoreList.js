import React from 'react';
import './StoreList.css';

function StoreList() {
  return (
    <div className="store-list">
      <h2>Stores List</h2>
      <ul>
        <li>Manchester, UK - 23 employees - 308 items - 2 orders</li>
        <li>Yorkshire, UK - 11 employees - 291 items - 15 orders</li>
        <li>Hull, UK - 5 employees - 41 items - 11 orders</li>
        <li>Leicester, UK - 16 employees - 261 items - 8 orders</li>
      </ul>
    </div>
  );
}

export default StoreList;
