import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="text-green-500 font-bold text-3xl cursor-pointer">Dasrat Dev</div>

        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-green-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-green-500 transition">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-green-500 transition">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500 transition">Contact</Link>
          </li>
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
        <ul
          className="absolute top-20 left-0 right-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden border-t border-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <li>
            <Link to="/" className="text-lg font-semibold hover:text-green-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/skills" className="text-lg font-semibold hover:text-green-500 transition">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="text-lg font-semibold hover:text-green-500 transition">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-semibold hover:text-green-500 transition">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
