import React from 'react'
import { Link } from 'react-router-dom';
import './Hheader.css';
function Hheader() {
    return (
        <div className="full-width-container">
          
            <div className="d-flex justify-content-center">
              <Link to="/"> 
                <button type="button" className="custom-btn">Home</button>
              </Link>
              <Link to="/home"> 
                <button type="button" className="custom-btn">Rooms</button>
              </Link>
              <Link to="/news"> 
                <button type="button" className="custom-btn">News</button>
              </Link>
              <Link to="/contact"> 
                <button type="button" className="custom-btn">Contact</button>
              </Link>
            </div>
          
        </div>
      );
}

export default Hheader