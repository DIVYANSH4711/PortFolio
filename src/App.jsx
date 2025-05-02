import React from 'react';
import Home from './Components/Home/Home';
import SkillsSection from './Components/SkillsSection/SkillsSection';
import Programming from './Components/Programming/Programming';
function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hidden bg-black text-white scroll-smooth font-sans">
      {/* Navbar */}
      <div className="fixed top-0 w-full h-12 flex justify-between items-center px-6 shadow-md z-10 border-b-1 border-zinc-600 bg-black">
        {/* Indicator dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
        </div>
        {/* Navbar Links */}
        <nav className="flex space-x-8 items-center text-sm cinzel-bold  font-medium tracking-wide">
          <a
            href="#home"
            className="px-2  hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-100 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-100 transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-100 transition-all duration-300"
          >
            C.P.
          </a>
          <a
            href="#contact"
            className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-100 transition-all duration-300"
          >
            Projects
          </a>
        </nav>
      </div>

      {/* Sections */}
      <section id="home" className="flex items-center justify-center">
        <Home />
      </section>
      <section id="about" className="flex items-center justify-center">
        < SkillsSection />
      </section>
      <section id="projects" className="flex items-center  justify-center">
        <Programming />
      </section>
      <section id="contact" className="flex items-center  justify-center h-screen">
        Projects Section
      </section>
    </div>
  );
}

export default App;
