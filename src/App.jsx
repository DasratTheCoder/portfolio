import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton"; // ✅ Import WhatsApp Button

function App() {
  return (
    <div className="bg-black text-white relative">
      {/* Top navigation bar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* ✅ WhatsApp button */}
      <WhatsappButton />
    </div>
  );
}

export default App;
