import React, { useRef } from "react";
import "../styles/projects.css";
import "../styles/animations.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const projectsData = [
  { title: "Industrial Hydraulic Press", img: "/images/hydraulic press.jpg" },
  { title: "Automation Assembly Line", img: "/images/assembly.jpg" },
  { title: "Hydraulic Cylinder Installation", img: "/images/cylinder.jpg" },
];

export default function Projects() {
  const containerRef = useRef();
  const show = useScrollAnimation(containerRef);

  return (
    <section className="projects-section" id="projects">
      <h2 className={`fade-up ${show ? "show" : ""}`}>Our Projects</h2>
      <div className={`projects-container fade-up ${show ? "show" : ""}`} ref={containerRef}>
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
