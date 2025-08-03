import React, { useEffect } from 'react';
import personal from '../assets/images/personal.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black">
      <div className="h-[89.7vh] flex items-center justify-center">
        <div className="w-full max-w-4xl px-4 text-center" data-aos="fade-up">
          {/* Name */}
          <h1 className="text-5xl font-black text-white mb-4 transition-transform duration-700 hover:scale-105">
            Dasrat Kumar
          </h1>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl text-gray-400 font-semibold mb-8 transition-opacity duration-700 hover:opacity-80">
            Frontend Developer & UI/UX Enthusiast
          </h3>

          {/* Image */}
          <div
            className="flex justify-center mb-10"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="h-64 w-64 rounded-full overflow-hidden shadow-lg border-4 border-green-500 hover:scale-105 transition-transform duration-500">
              <img
                src={personal}
                alt="Profile"
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Dasrat_Resume.pdf"
              className="relative group overflow-hidden px-6 py-3 text-xl font-semibold text-white bg-green-700 rounded-full shadow-md border border-green-600 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="relative z-10 group-hover:text-green-700 transition-colors duration-300">
                Download Resume
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            </a>

            {/* Github Button */}
            <a
              href="https://github.com/DasratTheCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-6 py-3 text-xl font-semibold text-white bg-green-700 rounded-full shadow-md border border-green-600 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="relative z-10 group-hover:text-green-700 transition-colors duration-300">
                Github
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
