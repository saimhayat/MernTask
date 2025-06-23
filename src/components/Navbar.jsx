import React, { useState } from 'react';
import { Link } from 'react-router';
import { CountContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {

  const [count, setCount] = useContext(CountContext)
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">SHOP-EASE</div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-toggle">Services </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/web">Full Stack Web Development</Link>
              <Link to="/app">App Development</Link>
              <Link to="/services">All categories</Link>
            </div>
          )}
        </div>

        <Link to="/contact">Contact Us</Link>
      </div>
      <div className='nav-cart'>
        <Link to="/cart"><i className="bi bi-cart4">{count}</i></Link>

      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
