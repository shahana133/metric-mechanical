import React, { useRef } from "react";
import "../styles/services.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const servicesData = [
  { title: "Welding Works", image: "/images/welding.jpg", type: "small" },
  { title: "Fabrication Works", image: "/images/fabrication.jpg", type: "small" },
  { title: "Engineering Works", image: "/images/engineering.jpg", type: "small" },
  { title: "Onsite Services", image: "/images/onsite.jpg", type: "large" },
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
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="overlay">
              <h3>{service.title}</h3>
              {service.type === "large" && <button className="explore-btn">Explore More</button>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
