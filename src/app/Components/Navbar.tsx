"use client"; 

import React, { useState } from 'react'; 
import '../Style/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
      <div className="logo">
  <h1>
    <span className="logo-highlight">Umama</span>Rajpoot
  </h1>
</div>


        <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/" className="active">Home</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/About">About me</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
        </ul>
        
        <div className="contactButton">
          <a href="/Contact" className="btn">Contact Me</a>
        </div>

       {/* Hamburger option for mb side */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
