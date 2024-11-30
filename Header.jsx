import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Recent Activity</h1>
      <input type="text" className="search-bar" placeholder="Search" />
    </div>
  );
}

export default Header;
