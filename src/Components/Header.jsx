import React, { useState } from 'react';
import './Header.css';
/**
 * Header Component
 * 
 * Displays the header section of the web application, including a site title,
 * a navigation menu, and a responsive hamburger menu for mobile devices.
 *
 * @returns {JSX.Element} JSX markup for the header.
 */
const Header = () => {
   // State to track the visibility of the mobile navigation menu
  const [menuOpen, setMenuOpen] = useState(false);
 /**
   * Toggles the visibility of the navigation menu
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'active' : ''}`}>
      <h1>Royal Estate</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Properties</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
