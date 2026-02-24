// AboutContent.jsx
import React from "react";
import { Link } from "react-router-dom";

// ✅ Import image from assets
import aboutImage from "../assets/about.jpg";

export default function AboutContent() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* ===== ABOUT TEXT ===== */}
        <div className="about-text">
          <h3>WELCOME TO</h3>
          <h2>Metric Mechanical</h2>

          <p>
            Metric Mechanical Spare Parts LLC is a leading provider of
            high-quality industrial equipment and spare parts. Since our
            inception, we have been committed to supplying reliable and
            durable components that keep machinery running efficiently
            across various industries.
          </p>

          <p>
            Our mission is to deliver top-notch products, timely service,
            and technical expertise to ensure our clients achieve optimal
            performance from their equipment. We carefully source all parts
            from trusted manufacturers, maintaining strict quality standards
            to guarantee reliability and longevity.
          </p>

          <p>
            At Metric Mechanical, we believe in building lasting
            relationships with our customers by offering personalized
            solutions, expert advice, and unmatched support. Our team of
            professionals is dedicated to understanding your unique
            requirements and providing parts that meet your operational
            needs precisely.
          </p>

          <p>
            We serve multiple industries including construction,
            manufacturing, marine, oil & gas, and automotive sectors.
            Through innovation, efficiency, and continuous improvement,
            we strive to exceed customer expectations and deliver value
            in every project we undertake.
          </p>

          <p>
            With a strong commitment to quality, integrity, and customer
            satisfaction, Metric Mechanical continues to grow as a trusted
            name in the field of industrial equipment and spare parts
            trading.
          </p>

          <Link to="/about" className="discover-btn">
            Discover More
          </Link>
        </div>

        {/* ===== ABOUT IMAGE ===== */}
        <div className="about-image">
          <img src={aboutImage} alt="Hydraulic system" />
        </div>
      </div>
    </section>
  );
}