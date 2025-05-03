
import SkillsSection from "./Components/SkillsSection/SkillsSection.jsx"
import Programming from "./Components/Programming/Programming.jsx"
import Home from "./Components/Home/Home.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Education from "./Components/Education/Education.jsx"


function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hidden bg-black text-white scroll-smooth font-sans">
      {/* Navbar */}
      {/* Navbar */}
      <div className="hidden md:flex fixed top-0 w-full h-14 justify-between items-center px-6 shadow-md z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-sm">
        {/* Indicator dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
        </div>
        {/* Navbar Links */}
        <nav className="flex space-x-8 items-center text-sm cinzel-bold font-medium tracking-wide">
          <a href="#home" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Home</a>
          <a href="#skills" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Skills</a>
          <a href="#programming" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Competitive Programming</a>
          <a href="#projects" className="px-2 py-1 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-500 transition-all duration-300">Projects</a>
        </nav>
      </div>


      {/* Sections */}
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

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-500 border-t border-zinc-800">
        <p className="text-sm cinzel-regular">© {new Date().getFullYear()} Divyansh Kashyap. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App