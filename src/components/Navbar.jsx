import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Changed from 'react-router' to 'react-router-dom'
import { CartContext } from '../App';
import '../App.css'; // Assuming your CSS file is named Navbar.css and is in the same directory

function Navbar () {
  const {cart, setCart} = useContext(CartContext)

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">SHOP-EASE</div>

      {/* Corrected class name concatenation using backticks ` ` */}
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
        <Link to="/cart"><i className="bi bi-cart4"> {cart.length}</i></Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
