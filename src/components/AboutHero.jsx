// import React from "react";
// import Particles from "react-tsparticles";
// import "../styles/about.css";

// export default function AboutHero() {
//   return (
//     <section className="about-hero">
//       {/* Background image div */}
//       <div className="about-background"></div>

//       {/* Particles */}
//       <Particles
//         className="about-particles"
//         options={{
//           background: { color: "transparent" },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onHover: { enable: true, mode: "repulse" },
//               onClick: { enable: true, mode: "push" },
//             },
//             modes: {
//               repulse: { distance: 100 },
//               push: { quantity: 4 },
//             },
//           },
//           particles: {
//             color: { value: "#ffffff" },
//             links: { enable: true, color: "#ffffff", distance: 120 },
//             move: { enable: true, speed: 0.5, outModes: "bounce" },
//             number: { value: 80, density: { enable: true, area: 800 } },
//             opacity: { value: 0.5 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 3 } },
//           },
//           detectRetina: true,
//         }}
//       />

//       {/* Overlay */}
//       <div className="about-overlay"></div>

//       {/* Hero text */}
//       <div className="hero-content">
//         <h1>About Us</h1>
//       </div>
//     </section>
//   );
// }