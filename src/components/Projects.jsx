import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-5xl font-extrabold text-green-500 text-center mb-16"
          data-aos="fade-down"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 border border-gray-700 rounded-xl p-8 flex flex-col justify-between shadow-lg hover:shadow-green-500/40 transition duration-300"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

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
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-green-400 transition"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-green-500 text-green-500 font-bold px-4 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
                >
                  <FiGithub /> GitHub
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
