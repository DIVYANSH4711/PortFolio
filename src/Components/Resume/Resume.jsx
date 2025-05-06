import React from "react";
import { MapPin, Phone, Mail, ExternalLink, Github, Linkedin } from "lucide-react";


const Resume = () => {
  return (
    <div className="w-full mt-20 bg-black text-white ">

      <div className="bg-black text-white p-6 md:p-10 max-w-4xl mx-auto font-sans">
        {/* Header */}
        <div className="text-center mb-8 border-b border-white pb-2">
          <h1 className="text-2xl md:text-3xl cinzel-bold font-bold mb-4">DIVYANSH KASHYAP</h1>
          <div className="flex flex-wrap font-serif justify-center gap-3 text-sm">
            <div className="flex font-serif items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Aklera, Rajasthan, India</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <a href="mailto:divyansh.kashyap.1109@gmail.com" className="hover:underline">divyansh.kashyap.1109@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Github className="w-4 h-4 mr-1" />
              <a href="https://github.com/DIVYANSH4711" className="hover:underline">GitHub</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-1" />
              <a href="https://www.linkedin.com/in/divyanshkashyap1109/" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <SectionTitle title="Education" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-2 mb-4">
            <div></div>
            <div>
              <h3 className="font-serif text-md">Jaypee University Of Engineering and Technology</h3>
              <p className="text-sm font-mono">Bachelor of Technology</p>
            </div>
            <div className="text-sm text-right cinzel-bold">Aug 2022 - May 2026</div>
            <div></div>
            <div>
              <h3 className="font-serif text-md">Adarsh Bal Vidhya Mandir, Aklera, India</h3>
              <p className="text-sm font-mono">Senior Secondary (Class 12 - RBSE) & Secondary (Class 10 - RBSE)</p>
            </div>
            <div className="text-sm text-right cinzel-bold">May 2018 - April 2021</div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <SectionTitle title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-2 mb-4">
            <div></div>
            <div>
              <h3 className="font-serif text-md">Stream-X</h3>
              <a href="https://by-divyansh.onrender.com" className="text-sm flex items-center hover:underline">
                <ExternalLink className="w-3 h-3 mr-1" />
                https://by-divyansh.onrender.com
              </a>
              <ul className="list-disc pl-5 my-2 font-mono text-sm">
                <li>Developing a fully functional video-sharing platform with features such as video uploads, streaming, subscriptions, and community posts.</li>
                <li>Implementing real-time user interactions like comments, likes, and tweets within the community section.</li>
              </ul>
            </div>
            <div className="text-sm text-right cinzel-bold">December 2024 - Ongoing</div>
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div className="mb-6">
          <SectionTitle title="Competitive Programming" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-2">
            <div></div>
            <div>
              <h3 className="text-md font-serif">LeetCode</h3>
              <p className="text-sm font-mono">
                Solved 550+ problems, ~1600 rating. Strong proficiency in Data Structures & Algorithms (DSA).
                Experience in solving algorithmic challenges and optimizing solutions for efficiency
              </p>
            </div>
            <div></div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <SectionTitle title="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-2">
            <div></div>
            <div>
              <SkillCategory title="Programming Languages" skills={["Python", "C/C++", "JavaScript", "Java"]}  />
              <SkillCategory title="Web Development" skills= {["React.js", "Node.js", "Express.js", "HTML/CSS"]} />
              <SkillCategory title="Databases" skills= {["MongoDB", "MongoDB Aggregation Framework", "MySQL"]} />
              <SkillCategory title="Tools and Technologies" skills={["GIT", "Postman"]}/>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <div className="border-b border-white pb-1 mb-3">
    <h2 className="cinzel-bold text-lg">{title}</h2>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-2">
    <h3 className=" font-serif">{title}</h3>
    <div className="flex justify-start items-center flex-wrap gap-2 mt-2">
      {skills.map((skill, index) => (
        <div key={index} className="text-white font-mono text-sm px-2 py-1 rounded-md border w-max border-zinc-700/50">{skill}</div>
      ))}
    </div>
  </div>
);

export default Resume;
