import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar({ onEnquireClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-left">
            {/* You can add info or leave empty */}
          </div>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Metric Mechanical" />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>Products</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>

            {/* Enquire Now button */}
            <li className="enquire-btn">
              <button onClick={() => { toggleMenu(); onEnquireClick(); }}>
                Enquire Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
