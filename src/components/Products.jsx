import React from "react";
import "../styles/products.css";

const productsData = [
  { title: "Hydraulic Hose Assembly", img: "/images/products-slider1.jpg" },
  { title: "Hydraulic Hoses", img: "/images/hoses.jpg" },
  { title: "Composite Hoses & Hose Assemblies", img: "/images/composite.jpg" },
  { title: "SS Flexible Hoses & Braids", img: "/images/ss.jpg" },

  { title: "Hose Fittings", img: "/images/hosefittings.jpg" },
  { title: "Tube Fittings and Clamps", img: "/images/tubes.jpg" },
  { title: "Brass Fittings", img: "/images/brass.jpg" },
  { title: "GI, MS, SS Fittings", img: "/images/gi-fittings.jpg" },
  { title: "Adaptors", img: "/images/adaptors.jpg" },

  { title: "Quick Release Couplings", img: "/images/quick-release-coupling.jpg" },
  { title: "Couplings", img: "/images/couplings.jpg" },
  { title: "SAE Flange Blocks", img: "/images/flangeblock.jpg" },

  { title: "Pressure Gauges & Test Point Hoses", img: "/images/pressure-g-test-points.jpg" },
  { title: "Valves", img: "/images/valves.jpg" },
  { title: "Injector Pipes", img: "/images/injector-pipes.jpg" },

  { title: "SS Expansion Bellows", img: "/images/sse.jpg" },
  { title: "Pneumatic Tubes & Fittings", img: "/images/Pneumatic.jpg" },

  { title: "Hose Protectors", img: "/images/hose-protection.jpg" },
  { title: "Hose Clamps", img: "/images/hose-clamps.jpg" },
  { title: "Oil & Lubricants", img: "/images/oil.jpg" },
  { title: "Belts", img: "/images/belts.jpg" },
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
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(${product.img})`,
                }}
              ></div>
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}