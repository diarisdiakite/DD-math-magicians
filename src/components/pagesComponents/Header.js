import React from 'react';
import '../../assets/css/navBar.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="title">Math Magicians</h1>
      <nav>
        <ul className="nav-container">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/calculator" className="nav-link">Calculator</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/quote" className="nav-link" style={({ isActive }) => (isActive ? ({ color: 'red' }) : {})}>Quote</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
