// components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Developed responsive websites and dashboards for clients using React, Tailwind CSS, and modern UI frameworks. Focused on performance, SEO, and clean design.",
  },
  {
    role: "Intern - Web Developer",
    company: "Tech Solutions",
    period: "Jan 2023 - Jul 2023",
    description:
      "Collaborated with a small team to build client websites. Implemented reusable components, integrated APIs, and optimized cross-browser compatibility.",
  },
  {
    role: "Content Creator",
    company: "YouTube & Blogs",
    period: "2021 - Present",
    description:
      "Created technical content, tutorials, and project showcases. Built an audience by simplifying coding concepts for beginners.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-green-500 text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative border-l-4 border-green-500 pl-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="absolute -left-7 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 shadow-md shadow-green-800/40">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              {exp.role}
            </h3>
            <p className="text-green-400 font-medium">
              {exp.company} • {exp.period}
            </p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
