import React from "react";
import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* ===== HERO SECTION ===== */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* ===== CONTACT CARD SECTION ===== */}
      <section className="contact-content">
        <div className="contact-card">

          {/* LEFT SIDE - INFO */}
          <div className="contact-left">


             <img src={logo} alt="MechMetric Logo" className="contact-logo" />

            <h2>Get in Touch</h2>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Al Jurf Industrial 2, Ajman, UAE</p>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <p>+971589013804</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>mechmetric@gmail.com</p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps?q=Al%20Jurf%20Industrial%202%20Ajman&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </section>

    </div>
  );
}