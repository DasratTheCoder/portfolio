import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageme from '../assets/images/personal.jpg'

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-5xl font-extrabold text-green-500 text-center mb-16"
          data-aos="fade-down"
        >
          Project
        </h2>

        <div
          className="flex flex-col md:flex-row gap-10 items-center bg-white/5 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-green-500/40 transition duration-300"
          data-aos="fade-up"
        >
          {/* Project Image */}
          <div className="w-full md:w-1/2">
            <img
              src={imageme}
              alt="Portfolio Project"
              className="rounded-xl border border-gray-800 hover:scale-105 transition duration-300"
            />
          </div>

          {/* Project Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h3 className="text-3xl font-bold text-white">My Portfolio Website</h3>
            <p className="text-gray-300 leading-relaxed">
              A sleek and responsive portfolio website built with React, Tailwind CSS, and animations using AOS & Framer Motion. It showcases my skills, projects, and includes smooth scroll navigation.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 text-sm">
              {['React', 'Tailwind CSS', 'Framer Motion', 'AOS'].map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-500 text-black font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://portfolio-five-red-96.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-black font-bold px-5 py-2 rounded hover:bg-green-400 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-username/your-portfolio-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500 text-green-500 font-bold px-5 py-2 rounded hover:bg-green-500 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
