import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Dasrat The SWD",
    role: "Software Web Developer",
    message:
      "Building this portfolio was a great experience. I loved combining design and functionality into one smooth interface.",
  },
  {
    name: "Varoon",
    role: "Medical Student",
    message:
      "I asked Dasrat to create a study planner for me and he delivered exactly what I imagined. Super clean and useful!",
  },
  {
    name: "Aaliya",
    role: "Freelance Client",
    message:
      "Fast, creative, and reliable. Dasrat turned my rough idea into a working site with a modern look. Highly recommend him!",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-black text-white py-20 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-14 text-green-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 shadow-md hover:border-green-500 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-green-500 text-2xl mb-4 opacity-70" />

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 italic">“{testimonial.message}”</p>

              {/* Author Info */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-green-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
