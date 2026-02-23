import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutContent from "./components/AboutContent";  // About text only
import About from "./components/About";                // Hero + content
import Products from "./components/Products";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WhatsappButton from "./components/WhatsappButton";
import EnquireForm from "./components/EnquireForm";
import HomeSections from "./components/HomeSections";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [enquireVisible, setEnquireVisible] = useState(false);

  return (
    <>
      {/* Navbar is always visible */}
      <Navbar onEnquireClick={() => setEnquireVisible(true)} />

      {/* Routes for different pages */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />              {/* Home page hero */}
              <AboutContent />      {/* Only About text/content */}
              {/* <Services /> */}
              <HomeSections />
            </>
          }
        />

        {/* About page */}
        <Route path="/about" element={<About />} /> {/* About hero + content */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />

      {/* Always visible components */}
      <WhatsappButton />

      {/* Enquire Form modal */}
      <EnquireForm
        visible={enquireVisible}
        onClose={() => setEnquireVisible(false)}
      />
    </>
  );
}

export default App;