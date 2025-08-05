import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const sections = ['home', 'skills', 'projects', 'contact'];

  return (
    <nav className="bg-black text-white border-b border-gray-800 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="text-green-500 font-bold text-3xl cursor-pointer">Dasrat Dev</div>

        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="hover:text-green-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-green-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-20 left-0 right-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden border-t border-gray-800">
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
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
