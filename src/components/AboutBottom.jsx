import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/about.css";
import aboutBg from "../assets/about-bg.jpg";

import p1 from "../assets/projects/p1.jpg";
import p2 from "../assets/projects/p2.jpg";
import p3 from "../assets/projects/p3.jpg";
import p4 from "../assets/projects/p4.jpg";

export default function AboutBottom() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      {/* ===== VISION + MISSION ===== */}
      <section className="about-bottom">
        <div className="about-bottom-container">

          <div className="about-bottom-item">
            <div className="icon">👁️</div>
            <h3>Vision</h3>
            <p>
              “To be the best quick service in hydraulic division”<br />
              Being the best means providing outstanding quality, service,
              value, and customer relations, so that we can make every
              customer happy.
            </p>
          </div>

          <div className="about-bottom-item">
            <div className="icon">🎯</div>
            <h3>Mission</h3>
            <p>
              We will provide our customers with the best and top-quality
              fluid power and power transmission service and products at all times.
              Metric Mechanical is committed to fostering a safe, responsible,
              and professional environment for all our employees and customers.
            </p>
          </div>

        </div>
      </section>

      {/* ===== PRODUCTS HIGHLIGHT SECTION ===== */}
      <section className="about-products">
        <div className="products-container">

          {/* LEFT: Auto sliding images */}
          <div className="products-image">
            <Slider {...sliderSettings}>
              <div>
                <img src="/images/products-slider1.jpg" alt="Fluid transfer product 1" />
              </div>
              <div>
                <img src="/images/products-slider2.jpg" alt="Fluid transfer product 2" />
              </div>
              <div>
                <img src="/images/products-slider3.jpg" alt="Fluid transfer product 3" />
              </div>
            </Slider>
          </div>

          {/* RIGHT: Text Content */}
          <div className="products-text">
            <h1>We are specialized in flexible fluid transfer solutions</h1>
            <h3>Safe, responsible and professional environment</h3>
            <h4>
              Metric Mechanical provides world-class hydraulic and pneumatic solutions
              with a focus on durability, reliability, and efficiency. Our products
              are carefully sourced and tested to meet the highest standards.
            </h4>
            <Link to="/products" className="see-products-btn">
              See All Products
            </Link>
          </div>

        </div>
      </section>
      {/* ===== PROJECTS SECTION ===== */}
         <section className="about-projects" style={{ backgroundImage: `url(${aboutBg})` }}>
  <div className="about-projects-container">
    <div className="about-projects-text">
      <h1>Our Projects</h1>
      <p>
        We have successfully delivered hydraulic solutions across
        industrial, commercial, and infrastructure projects.
        Our commitment to quality and precision makes us a
        trusted partner in the UAE.
      </p>
    </div>

    <div className="about-projects-slider">
      <Slider {...sliderSettings}>
        <div><img src={p1} alt="Project 1" /></div>
        <div><img src={p2} alt="Project 2" /></div>
        <div><img src={p3} alt="Project 3" /></div>
        <div><img src={p4} alt="Project 4" /></div>
      </Slider>
    </div>
  </div>
</section>

      {/* ===== FOOTER =====
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
      </footer> */}
    </>
  );
}