import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>Provides world-class mechanical spare parts and solutions.</p>
      </div>

      <div className="footer-services">
        <h3>Services</h3>
        <ul>
          <li>On-Site Support</li>
          <li>Preventive Maintenance Advice</li>
          <li>Custom Hose Fabrication</li>
          <li>Technical Consultation</li>
        </ul>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Get in Touch</h3>
        <p>Al Jurf Industrial 2, Ajman, UAE</p>
        <p>+971589013804</p>
        <p>mechmetric@gmail.com</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}