import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import axios from 'axios'
import WhatsappButton from "./components/WhatsappButton"; // ✅ Import WhatsApp Button;
import About from "./components/About";
import Services from './components/Services'
import Experience from "./components/Experience";
import Blog from "./components/Blog";


function App() {

  return (
    <div className="bg-black text-white relative">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <About />
      <Experience />
      <Blog />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
