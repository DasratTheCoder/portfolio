import React, { useEffect } from 'react';
import personal from '../assets/images/personal.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className="bg-black pt-20">
      <div className="h-[89.7vh] flex items-center justify-center">
        <div className="w-full max-w-4xl px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-black text-white mb-4">Dasrat Kumar</h1>

          <h3 className="text-3xl sm:text-4xl text-gray-400 font-semibold mb-8">
            Frontend Developer & UI/UX Enthusiast
          </h3>

          <div className="flex justify-center mb-10" data-aos="zoom-in" data-aos-delay="300">
            <div className="h-64 w-64 rounded-full overflow-hidden shadow-lg border-4 border-green-500">
              <img
                src={personal}
                alt="Profile"
                loading="lazy"
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
            <a
              href="/resume.pdf"
              download="Dasrat_Resume.pdf"
              className="w-40 h-12 text-base font-semibold text-white bg-green-700 rounded-full border border-green-600 hover:bg-green-600 transition inline-flex items-center justify-center"
            >
              Download Resume
            </a>

            <a
              href="mailto:dasratkumardeewan@gmail.com"
              className="w-40 h-12 text-base font-semibold text-white bg-green-700 rounded-full border border-green-600 hover:bg-green-600 transition inline-flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
