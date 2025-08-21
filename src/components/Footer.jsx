import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Dasrat Dev</h2>
          <p className="text-sm leading-relaxed">
            Freelance Web Developer passionate about building modern,
            responsive, and scalable web applications. Let's build something amazing together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
            <li><a href="#services" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Frontend (React, Tailwind)</li>
            <li>Backend (Node.js, APIs)</li>
            <li>Freelance Projects</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/DasratTheCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dasrat-kumar-32b7b534a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Dasrat Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
