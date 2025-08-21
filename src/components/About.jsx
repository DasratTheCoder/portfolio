import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-5xl font-extrabold text-green-500 mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I’m <span className="text-green-400 font-semibold">Dasrat</span>,
            a passionate <span className="text-green-400">Software & Web Developer</span> 
            from Hyderabad, Sindh. I specialize in creating modern, scalable, 
            and user-friendly web applications with clean UI and smooth 
            functionality. 
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Over the past few years, I’ve worked with technologies like{" "}
            <span className="text-green-400">React, Next.js, Node.js, Express, 
            and MongoDB</span>. My goal is to deliver solutions that not only 
            work well but also make clients proud of their online presence.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Outside of coding, I love learning new tech, collaborating with 
            others, and building creative projects that solve real-world problems.
          </p>
        </div>

        {/* Right Side Highlight Box */}
        <div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-lg hover:shadow-green-500/50 transition duration-300"
          data-aos="fade-left"
        >
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            Quick Info
          </h3>
          <ul className="text-gray-300 space-y-3 text-lg">
            <li>📍 Location: Hyderabad, Sindh</li>
            <li>📧 Email: <span className="text-green-400">dasratkumardeewan@gmail.com</span></li>
            <li>📱 Phone: <span className="text-green-400">03142344057</span></li>
            <li>💼 Freelance: Available</li>
            <li>⚡ Experience: Frontend & Full-Stack Projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
