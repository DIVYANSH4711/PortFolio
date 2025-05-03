import { ExternalLink, Github, Code } from "lucide-react"

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image, contributors }) => (
  <div className="bg-black/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 group">
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
      />
    </div>

    <div className="p-5">
      <h3 className="text-xl cinzel-bold text-white mb-2">{title}</h3>
      {
        contributors && contributors.length > 0 && (
          <p className="text-zinc-300 font-serif text-sm mb-2">
            Contributors: {contributors.join(", ")}
          </p>
        )
      }
      <p className="text-zinc-400 font-serif text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-300 rounded-md border border-zinc-700">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <Github size={18} />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            disabled={liveLink === "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  </div>
)

const Projects = () => {
  const projects = [
    {
      title: "StreamX - A Video Streaming Platform",
      description:
        "A full-stack video streaming platform with user authentication, video playback, comment and much more.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "MongoDB Aggregation", "JWT", "Cloudinary", "Tailwind CSS"],
      githubLink: "https://github.com/DIVYANSH4711/youtube-clone-backend",
      liveLink: "https://by-divyansh.onrender.com/",
      image: "/StreamX.png",
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/DIVYANSH4711/PortFolio",
      liveLink: "https://portfolio-divyansh.onrender.com/",
      image: "/PortFolio.png",
    },
    {
      title: "Lyrica - A Music Recommendation App",
      description: "A Personalized music recommendation system that allows users to explore and discover songs similar to their favorites.",
      technologies: ["React", "Tailwind CSS", "Spotify API", "Machine Learning", "Flask", "Python"],
      githubLink: "https://github.com/DIVYANSH4711/Lyrica-frontend",
      liveLink: "",
      image: "/Lyrica.png",
      contributors: [
        "Divyansh Kashyap",
        "Govind Rai",
        "Varun Pareek",
      ]
    },
    {
      title: "CS50 - Web Development Project 0",
      description: "A clone of the Google search page using HTML & CSS.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/DIVYANSH4711/CS50-Web-Projects",
      liveLink: "",
      image: "/GooglePage.png",
    },
  ]

  return (
    <div className="w-full max-w-6xl px-6 py-12">
      <div className="mb-12 text-center">
        <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
        <h2 className="text-3xl md:text-4xl cinzel-bold text-white">Projects</h2>
        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">A collection of my recent work and personal projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/DIVYANSH4711"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-zinc-600 rounded-md hover:bg-zinc-800 transition-all duration-300 cinzel-regular inline-flex items-center gap-2"
        >
          <Code size={18} />
          View More Projects
        </a>
      </div>
    </div>
  )
}

export default Projects;
