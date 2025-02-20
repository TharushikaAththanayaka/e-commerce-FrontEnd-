import React from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="site-name">SereniTea</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/cart" className="nav-link cart-icon">
          <FaShoppingCart size={20} />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
