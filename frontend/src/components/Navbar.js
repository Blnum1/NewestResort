import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className="navbar">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div>
          <Link to="/"> {/* เปลี่ยน a tag เป็น Link */}
            <h1>Resort</h1>
          </Link>
        </div>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
          {user ? (
            <>
              <h1 style={{ color: 'white', marginRight: '20px' }}>{user.name}</h1>
            </>
          ) : (
            <>
              <Link to="/login"> {/* ใช้ Link สำหรับปุ่ม Login */}
                <button type="button">Login</button>
              </Link>
              <Link to="/register"> {/* ใช้ Link สำหรับปุ่ม Sign-up */}
                <button type="button">Sign-up</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;