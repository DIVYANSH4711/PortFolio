import React from 'react';

const CodeIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const LayoutDashboardIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);


const DatabaseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
    <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
  </svg>
);



// Skill box
const Skill = ({ name, color = "bg-zinc-900" }) => (
   <div
     className={`px-4 py-2 group rounded-md border border-zinc-700/50 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-200  transition-all duration-300 ${color}`}
   >
     <span className="text-white font-medium cinzel-regular text-sm whitespace-nowrap group-hover:text-black group-hover:font-bold">{name}</span>
   </div>
 );
 

// Section block for each skill category
const SkillCategory = ({ title, skills, icon }) => (
  <div className="mb-12">
    <div className="flex items-center mb-6 space-x-3">
      <div className="text-white p-2 rounded-md border border-zinc-700/50">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold cinzel-bold text-white">{title}</h3>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} color={skill.color} />
      ))}
    </div>
  </div>
);

// Main component
const SkillsSection = () => {
  const skillsData = {
    languages: [
      { name: "JavaScript" },
      { name: "C/C++" },
      { name: "Python" },
      { name: "Java" },
    ],
    webDevelopment: [
      { name: "React" },
      { name: "Express" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "GIT/GITHUB" },
      { name: "Postman" },
    ],
    databaseQueryLanguages: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "MongoDB Aggregation" },
    ],
  };

  return (
    <div className="w-screen bg-black py-5 px-4 overflow-y-auto border-dashed ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="text-zinc-300 text-4xl cinzel-bold mx-auto">Technologies and tools I work with</p>
        </div>

        <SkillCategory title="Languages" skills={skillsData.languages} icon={<CodeIcon />} />
        <SkillCategory title="Web Development" skills={skillsData.webDevelopment} icon={<LayoutDashboardIcon />} />
        <SkillCategory title="Database Query Languages" skills={skillsData.databaseQueryLanguages} icon={<DatabaseIcon />} />
      </div>
    </div>
  );
};

export default SkillsSection;
