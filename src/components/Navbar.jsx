import React, { useState, useEffect, memo } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const sections = ["home", "skills", "projects", "testimonials", "contact"];

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-green-500 font-bold text-3xl cursor-pointer tracking-wide"
        >
          Dasrat <span className="text-white">Dev</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {sections.map((section) => (
            <li key={section} className="relative group">
              <button
                onClick={() => scrollToSection(section)}
                className="hover:text-green-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-full bg-green-600 hover:bg-green-500 font-semibold transition"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-20 left-0 right-0 w-full bg-black/95 backdrop-blur flex flex-col items-center space-y-6 py-6 md:hidden border-t border-gray-800">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="text-lg font-semibold hover:text-green-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-full bg-green-600 hover:bg-green-500 font-semibold transition"
            >
              Hire Me
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default memo(Navbar);
