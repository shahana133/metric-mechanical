import React from "react";
import "../styles/products.css";

// Import all assets
import slider1 from "../assets/products-slider1.jpg";
import hoses from "../assets/hoses.jpg";
import composite from "../assets/composite.jpg";
import ss from "../assets/ss.jpg";
import hoseFittings from "../assets/hosefittings.jpg";
import tubes from "../assets/tubes.jpg";
import brass from "../assets/brass.jpg";
import giFittings from "../assets/gi-fittings.jpg";
import adaptors from "../assets/adaptors.jpg";
import quickRelease from "../assets/quick-release-coupling.jpg";
import couplings from "../assets/couplings.jpg";
import flangeBlock from "../assets/flangeblock.jpg";
import pressureTest from "../assets/pressure-g-test-points.jpg";
import valves from "../assets/valves.jpg";
import injectorPipes from "../assets/injector-pipes.jpg";
import sse from "../assets/sse.jpg";
import pneumatic from "../assets/Pneumatic.jpg";
import hoseProtectors from "../assets/hose-protection.jpg";
import hoseClamps from "../assets/hose-clamps.jpg";
import oil from "../assets/oil.jpg";
import belts from "../assets/belts.jpg";

const productsData = [
  { title: "Hydraulic Hose Assembly", img: slider1 },
  { title: "Hydraulic Hoses", img: hoses },
  { title: "Composite Hoses & Hose Assemblies", img: composite },
  { title: "SS Flexible Hoses & Braids", img: ss },
  { title: "Hose Fittings", img: hoseFittings },
  { title: "Tube Fittings and Clamps", img: tubes },
  { title: "Brass Fittings", img: brass },
  { title: "GI, MS, SS Fittings", img: giFittings },
  { title: "Adaptors", img: adaptors },
  { title: "Quick Release Couplings", img: quickRelease },
  { title: "Couplings", img: couplings },
  { title: "SAE Flange Blocks", img: flangeBlock },
  { title: "Pressure Gauges & Test Point Hoses", img: pressureTest },
  { title: "Valves", img: valves },
  { title: "Injector Pipes", img: injectorPipes },
  { title: "SS Expansion Bellows", img: sse },
  { title: "Pneumatic Tubes & Fittings", img: pneumatic },
  { title: "Hose Protectors", img: hoseProtectors },
  { title: "Hose Clamps", img: hoseClamps },
  { title: "Oil & Lubricants", img: oil },
  { title: "Belts", img: belts },
];

export default function Products() {
  return (
    <div className="products-page">

      {/* ===== HERO SECTION ===== */}
      <section className="products-hero">
        <div className="products-hero-overlay">
          <h1>Our Products</h1>
          <p>Premium Hydraulic Components & Industrial Solutions</p>
        </div>
      </section>

      {/* ===== PRODUCTS GRID SECTION ===== */}
      <section className="products-section" id="products">
        <div className="products-container">
          {productsData.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}