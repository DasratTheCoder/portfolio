import React from "react";

const ProjectCard = () => {
  return (
    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-green-500 rounded-3xl p-6 max-w-md w-full shadow-[0_0_30px_-5px_#22c55e50] hover:shadow-[0_0_40px_0px_#22c55eaa] transition duration-300 group">
      <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-10 rounded-3xl z-0"></div>

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
          🎮 Tic Tac Toe
        </h3>
        <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
          A classic, minimal Tic Tac Toe game built with HTML, CSS, and JS.
          Responsive, clean, and fun to play!
        </p>
        <a
          href="https://tic-tac-toe-game.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
        >
          🔗 View Live
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* Add more <ProjectCard /> components as needed */}
      </div>
    </div>
  );
};

export default ProjectsSection;
