import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">E-Commerce UI Clone</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">Products</a></li>
            <li><a href="#" className="nav-link">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;