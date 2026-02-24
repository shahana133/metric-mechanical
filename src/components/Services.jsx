import React, { useRef } from "react";
import "../styles/services.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Import images from src/assets
import weldingImg from "../assets/welding.jpg";
import fabricationImg from "../assets/fabrication.jpg";
import engineeringImg from "../assets/engineering.jpg";
import onsiteImg from "../assets/onsite.jpg";

const servicesData = [
  { title: "Welding Works", image: weldingImg, type: "small" },
  { title: "Fabrication Works", image: fabricationImg, type: "small" },
  { title: "Engineering Works", image: engineeringImg, type: "small" },
  { title: "Onsite Services", image: onsiteImg, type: "large" },
];

export default function Services() {
  const containerRef = useRef();
  const show = useScrollAnimation(containerRef);

  return (
    <section className="services-section" id="services">
      <h2 className={`fade-up ${show ? "show" : ""}`}>Our Services</h2>

      <div className={`services-grid ${show ? "show" : ""}`} ref={containerRef}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-card ${service.type}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="overlay">
              <h3>{service.title}</h3>
              {service.type === "large" && (
                <button className="explore-btn">Explore More</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}