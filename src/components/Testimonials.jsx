import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="bg-black text-white py-20" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-green-500 mb-16">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-green-500/40 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-gray-300 mb-4 italic">“{testimonial.message}”</p>
              <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
              <p className="text-green-400 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
