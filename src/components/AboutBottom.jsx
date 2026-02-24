import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/about.css";

// ✅ Import all images from assets
import s1 from "../assets/products-slider1.jpg";
import s2 from "../assets/products-slider2.jpg";
import s3 from "../assets/products-slider3.jpg";

import p1 from "../assets/projects/p1.jpg";
import p2 from "../assets/projects/p2.jpg";
import p3 from "../assets/projects/p3.jpg";
import p4 from "../assets/projects/p4.jpg";

import aboutBg from "../assets/about-bg.jpg";

export default function AboutBottom() {

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

          <div className="products-image">
            <Slider {...sliderSettings}>
              <div><img src={s1} alt="Fluid transfer product 1" /></div>
              <div><img src={s2} alt="Fluid transfer product 2" /></div>
              <div><img src={s3} alt="Fluid transfer product 3" /></div>
            </Slider>
          </div>

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
      <section
        className="about-projects"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
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
              <div><img src={p1} alt="P1" /></div>
              <div><img src={p2} alt="P2" /></div>
              <div><img src={p3} alt="P3" /></div>
              <div><img src={p4} alt="P4" /></div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}