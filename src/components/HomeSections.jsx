import React, { useCallback } from "react";
import "../styles/homeSections.css";
import WavyDivider from "./WavyDivider";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from "react-router-dom";

const partners = [
  "/images/partner1.jpg",
  "/images/partner2.png",
  // add more partner logos
];

const HomeSections = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="home-sections">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles-bg"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5, width: 1 },
            move: { enable: true, speed: 1.5 },
            size: { value: { min: 1, max: 4 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 200, links: { opacity: 0.8 } } },
          },
          detectRetina: true,
        }}
      />

      {/* ===== WHAT WE OFFER ===== */}
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <h3>Hydraulic Components</h3>
            <p>High quality pumps, valves, and cylinders for all industries.</p>
          </div>
          <div className="offer-card">
            <h3>Industrial Solutions</h3>
            <p>Customized solutions for your machinery and systems.</p>
          </div>
          <div className="offer-card">
            <h3>Maintenance Support</h3>
            <p>Preventive maintenance and on-site technical support.</p>
          </div>
        </div>

        {/* Wavy Divider */}
        <WavyDivider color="#d10000" height={120} />
      </section>

      {/* ===== LEADING MANUFACTURERS ===== */}
      <section className="leading-manufacturers">
        <h2>Parts Supplied By Leading Manufacturers</h2>
        <div className="divider" />
        <div className="partners-slider">
          <div className="slider-track">
            {partners.map((logo, idx) => (
              <img key={idx} src={logo} alt={`Partner ${idx + 1}`} />
            ))}
            {partners.map((logo, idx) => (
              <img key={idx + 100} src={logo} alt={`Partner ${idx + 1}`} />
            ))}
          </div>
        </div>

        {/* Wavy Divider */}
        {/* <WavyDivider color="#d10000" height={120} flip={true} /> */}
      </section>

      {/* ===== SHORT OVERVIEW ===== */}
      <section className="short-overview">
        <h2>Short Overview</h2>
        <div className="divider" />
        <div className="highlights">
          <div className="highlight">
            <h3>15K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="highlight">
            <h3>10,000+</h3>
            <p>Total Products</p>
          </div>
          <div className="highlight">
            <h3>2K+</h3>
            <p>Suppliers</p>
          </div>
          <div className="highlight">
            <h3>200K+</h3>
            <p>Products Delivered</p>
          </div>
        </div>

        {/* Wavy Divider */}
        <WavyDivider color="#000000" height={120} flip={true} />
      </section>

      {/* ===== FOOTER ===== */}
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
    </div>
  );
};

export default HomeSections;