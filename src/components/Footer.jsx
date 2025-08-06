import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Dasrat Kumar. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/DasratTheCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dasrat-kumar-32b7b534a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
