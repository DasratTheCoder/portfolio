import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
        <Skills />
        <Projects />
      </Suspense>
      <Contact />
    </div>
  );
}

export default App;
