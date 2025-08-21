import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, type: "Frontend" },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, type: "Frontend" },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, type: "Frontend" },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, type: "Frontend" },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, type: "Fullstack" },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, type: "Backend" },
  { name: 'Express.js', icon: <SiExpress className="text-white" />, type: "Backend" },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, type: "Database" },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" />, type: "State Mgmt" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2
          className="text-5xl font-extrabold text-green-500 mb-4"
          data-aos="fade-down"
        >
          Skills
        </h2>
        <p className="text-gray-400 mb-16 text-lg" data-aos="fade-up">
          The tools & technologies I use to turn ideas into reality.
        </p>

        {/* Skill Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          data-aos="fade-up"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-gray-700 
                         shadow-lg hover:border-green-500 hover:shadow-green-500/40 
                         transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#22c55e] transition-all duration-300">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition">
                {skill.name}
              </h3>

              {/* Small Type */}
              <p className="text-gray-400 mt-2 text-sm">{skill.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
