// components/Hero.jsx
import React from 'react';
import personal from '../assets/images/personal.webp';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 text-green-500" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Dasrat Kumar
      </motion.h1>

      <motion.h2 className="text-xl md:text-2xl text-gray-300 mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <span className="font-semibold">Frontend Developer & UI/UX Enthusiast</span>
      </motion.h2>

      <motion.img
        src={personal}
        alt="Profile"
        loading="lazy"
        className="rounded-full w-48 h-48 object-cover border-4 border-green-500 shadow-lg shadow-green-800/40"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div className="flex flex-wrap justify-center items-center gap-4 mt-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <a href="/resume.pdf" download="Dasrat_Resume.pdf" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group hover:bg-green-600 hover:shadow-lg">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H3" />
            </svg>
            Download
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Resume</span>
          <span className="relative invisible">Download Resume</span>
        </a>

        <a href="mailto:dasratkumardeewan@gmail.com" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group hover:bg-green-500 hover:text-white hover:shadow-lg bg-white">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-green-500 group-hover:translate-x-0 ease">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5l-4-4-4 4" />
            </svg>
            Let's Talk
          </span>
          <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:-translate-x-full ease">Hire Me</span>
          <span className="relative invisible">Hire Me</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;