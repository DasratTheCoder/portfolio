import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // Main wrapper for the entire application with black background and white text
    <div className="bg-black text-white">
      {/* Top navigation bar with links */}
      <Navbar />

      {/* Hero section with name, title, image, and call to action */}
      <Hero />

      {/* Skills section showcasing technologies known */}
      <Skills />

      {/* Projects section displaying portfolio items */}
      <Projects />

      {/* Testimonials section to show feedback from clients or colleagues */}
      <Testimonials />

      {/* Contact form to get in touch */}
      <Contact />

      {/* Footer with copyright and social links */}
      <Footer />
    </div>
  );
}

export default App;
