import React from "react";
import "../styles/WavyDivider.css";

const WavyDivider = ({ color = "#d66565", flip = false, height = 100 }) => {
  return (
    <div className={`wavy-divider ${flip ? "flip" : ""}`} style={{ height }}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,138.7C672,128,768,96,864,112C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L0,320Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
};

export default WavyDivider;