import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: 'To-Do List App',
      image: 'https://cdn-icons-png.flaticon.com/512/2387/2387635.png',
      description:
        'A simple To-Do List app built with HTML, CSS, and JavaScript. Features include adding, removing, checking tasks, and saving to localStorage.',
      tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      demo: 'https://todo-list-erc6ivcoq-dasrats-projects.vercel.app/',
      github: 'https://github.com/DasratTheCoder/todo-list',
    },
    {
      title: 'Web Calculator',
      image: 'https://cdn-icons-png.flaticon.com/512/10434/10434504.png',
      description:
        'A responsive web calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean, mobile-friendly UI.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      demo: 'https://dasratthecoder.github.io/Web-Calculator/',
      github: 'https://github.com/DasratTheCoder/Web-Calculator',
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-green-500 text-center mb-16" data-aos="fade-down">
          Projects
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-10 items-center bg-white/5 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-green-500/40 transition duration-300"
              data-aos="fade-up"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="rounded-xl border border-gray-800 hover:scale-105 transition duration-300"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3 text-sm">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="bg-green-500 text-black font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-black font-bold px-5 py-2 rounded hover:bg-green-400 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500 text-green-500 font-bold px-5 py-2 rounded hover:bg-green-500 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
