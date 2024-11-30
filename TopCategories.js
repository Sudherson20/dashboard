import React from 'react';
import './TopCategories.css';

function TopCategories() {
  return (
    <div className="top-categories">
      <h2>Top Item Categories</h2>
      <div className="category-list">
        {/* Icons can be replaced with actual images/icons */}
        <div className="category-icon">👕</div>
        <div className="category-icon">👒</div>
        <div className="category-icon">🎒</div>
        <div className="category-icon">🛍️</div>
        <div className="category-icon">🛒</div>
        <div className="category-icon">👓</div>
      </div>
    </div>
  );
}

export default TopCategories;
