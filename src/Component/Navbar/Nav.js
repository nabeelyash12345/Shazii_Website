import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../Assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar_logo">
        <img src={logo} alt="Shazii Enterprises Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar_links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/showroom" onClick={toggleMenu}>Showroom</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
