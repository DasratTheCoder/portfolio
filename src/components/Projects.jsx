import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "To-Do List App",
      description:
        "A productivity-focused To-Do List app with add, remove, check, and local storage persistence. Built to practice clean UI and state management.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      demo: "https://todo-list-erc6ivcoq-dasrats-projects.vercel.app/",
      github: "https://github.com/DasratTheCoder/todo-list",
    },
    {
      title: "Web Calculator",
      description:
        "A responsive web calculator supporting basic arithmetic operations. Designed with a minimal UI for both desktop and mobile users.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: "https://dasratthecoder.github.io/Web-Calculator/",
      github: "https://github.com/DasratTheCoder/Web-Calculator",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-green-500 mb-20"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              role="article"
              className="group bg-white/5 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-green-500/40 transition duration-300 hover:-translate-y-2"
              data-aos="fade-up"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-green-400 transition"
                  aria-label={`${project.title} Live Demo`}
                >
                  <FiExternalLink className="text-lg" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-green-500 text-green-500 font-semibold px-4 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <FiGithub className="text-lg" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
