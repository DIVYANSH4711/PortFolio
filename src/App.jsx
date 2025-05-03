
import SkillsSection from "./Components/SkillsSection/SkillsSection.jsx"
import Programming from "./Components/Programming/Programming.jsx"
import Home from "./Components/Home/Home.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Education from "./Components/Education/Education.jsx"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Resume from "./Components/Resume/Resume.jsx"
import React from "react";
import { useState } from "react";
import { Mail } from "lucide-react";


function App() {
  const [page, setPage] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("divyansh.kashyap.1109@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => console.error("Failed to copy!", err));
  };
  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hidden bg-black text-white scroll-smooth font-sans">
      {/* Navbar */}

      <div className="hidden md:flex fixed top-0 w-full md:h-14 justify-between items-center md:px-6 shadow-md z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-sm">
        {/* Indicator dots */}
        <div className="flex space-x-2 py-1.5 px-2 cursor-pointer border border-transparent hover:border-zinc-700/50 rounded-sm" onClick={(prev) => setPage(!page)}>
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
        </div>
        <div className="flex  space-x-2">
          <a
            className="text-white p-2 rounded-md border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
            href="https://github.com/DIVYANSH4711"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            className="text-white p-2 rounded-md border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
            href="https://www.linkedin.com/in/divyanshkashyap1109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            className="text-white p-2 rounded-md border border-zinc-700/50 hover:border-zinc-600  transition-all duration-300"
            href="https://leetcode.com/Divyansh_Kashyap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={24} />
          </a>
        </div>
        <div
          className="flex items-center text-white cinzel-bold w-max rounded-md border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 px-2 py-1 cursor-pointer"
          onClick={handleCopy}
        >
          <Mail className="w-4 h-4 mr-1" />
          Mail
        </div>
        {/* Navbar Links */}
        <nav className="flex space-x-8 items-center text-sm cinzel-bold font-medium tracking-wide">
          <a href="#home" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Home</a>
          <a href="#skills" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Skills</a>
          <a href="#programming" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Competitive Programming</a>
          <a href="#projects" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Projects</a>
        </nav>
      </div>

      {copied && (
        <div className="fixed bottom-6 right-6 text-sm font-serif bg-black border-1 border-green-700 text-white px-4 py-2 rounded-md shadow-lg z-50  transition-all duration-1000">
          Email copied to clipboard!
        </div>
      )}

      {/* Sections */}
      {
        page == true ? (
          <>
            <section id="home" className="min-h-screen flex items-center justify-center border-b border-zinc-800">
              <Home />
            </section>
            <section id="Education" className="min-h-screen flex items-center justify-center border-b border-zinc-800">
              <Education />
            </section>
            <section id="skills" className="min-h-screen flex items-center justify-center border-b border-zinc-800">
              <SkillsSection />
            </section>
            <section id="programming" className="min-h-screen flex items-center justify-center border-b border-zinc-800">
              <Programming />
            </section>
            <section id="projects" className="min-h-screen flex items-center justify-center border-b border-zinc-800">
              <Projects />
            </section>
          </>
        ) : (<Resume />)
      }

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-500 border-t border-zinc-800">
        <p className="text-sm cinzel-regular">© {new Date().getFullYear()} Divyansh Kashyap. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App