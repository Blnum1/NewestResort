import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
    <header style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div>
        <Link to="/"> {/* เปลี่ยน a tag เป็น Link */}
          <h1>Resort</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/login"> {/* ใช้ Link สำหรับปุ่ม Login */}
          <button type="button">Login</button>
        </Link>
        <Link to="/register"> {/* ใช้ Link สำหรับปุ่ม Sign-up */}
          <button type="button">Sign-up</button>
        </Link>
      </div>
    </header>
  </div>
  );
}

export default Navbar;