import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Inventor.io</h2>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/stores" activeClassName="active">
            Stores
          </NavLink>
        </li>
        <li>
          <NavLink to="/finances" activeClassName="active">
            Finances
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
