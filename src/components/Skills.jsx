import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 5 },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 4 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" />, level: 4 },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" />, level: 4 },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400 text-4xl" />, level: 4 },
  { name: 'Node.js', icon: <FaNode className="text-green-600 text-4xl" />, level: 3 },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" />, level: 3 },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" />, level: 4 },
  { name: 'Figma', icon: <SiFigma className="text-pink-500 text-4xl" />, level: 3 },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black py-16 px-6 text-white" id="skills">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-green-500 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition duration-300 border border-gray-800 hover:border-green-500"
              data-aos="zoom-in"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < skill.level ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="mt-12" data-aos="fade-up">
          <a
            href="/resume.pdf"
            download
            className="inline-block relative group overflow-hidden px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:text-black transition-all duration-300"
          >
            <span className="absolute left-0 top-0 h-full w-full bg-white transform -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-0"></span>
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
