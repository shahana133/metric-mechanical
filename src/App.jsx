import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutContent from "./components/AboutContent";
import About from "./components/About";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WhatsappButton from "./components/WhatsappButton";
import EnquireForm from "./components/EnquireForm";
import HomeSections from "./components/HomeSections";
import Footer from "./components/Footer";

function App() {
  const [enquireVisible, setEnquireVisible] = useState(false);

  return (
    <>
      <Navbar onEnquireClick={() => setEnquireVisible(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutContent />
              <HomeSections />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsappButton />

      <EnquireForm
        visible={enquireVisible}
        onClose={() => setEnquireVisible(false)}
      />
    </>
  );
}

export default App;