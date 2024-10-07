import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <header style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div>
          <a href="/">
            <h1>Resort</h1>
          </a>
        </div>
        <div className="nav-links">
          <button type="button">Login</button>
          <button type="button">Sign-up</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;