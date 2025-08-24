import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiCode, FiSmartphone, FiGlobe } from "react-icons/fi";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      icon: <FiCode className="text-4xl text-green-400" />,
      title: "Web Development",
      description:
        "I build responsive, high-performance websites and applications using modern technologies to ensure smooth user experiences.",
    },
    {
      icon: <FiSmartphone className="text-4xl text-green-400" />,
      title: "Responsive Design",
      description:
        "I design layouts that adapt seamlessly across all devices, ensuring your site looks great on desktop, tablet, and mobile.",
    },
    {
      icon: <FiGlobe className="text-4xl text-green-400" />,
      title: "SEO & Optimization",
      description:
        "I optimize websites for performance, accessibility, and search engine rankings, helping your site reach a wider audience.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-green-500 mb-20"
          data-aos="fade-down"
        >
          My Services
        </h2>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-green-500/40 transition duration-300 hover:-translate-y-2"
              data-aos="fade-up"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-green-400 mb-4 text-center group-hover:text-green-300 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
