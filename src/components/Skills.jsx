import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb, SiMysql, SiExpress, SiC } from 'react-icons/si';
import SiVSCode from "../assets/vscode.svg";

const iconMap = {
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  React: <FaReact className="text-cyan-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-800" />,
  MySQL: <SiMysql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  C: <SiC className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  Git: <FaGitAlt className="text-red-500" />,
  GitHub: <FaGitAlt className="text-gray-800" />,
  "VS Code": <img src={SiVSCode} alt="VS Code" className="w-4 h-4" />,
};

const Skills = () => {
  const skillCategories = {
    "Frontend": ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
    "Backend": ["Node.js", "Express.js"],
    "Database": ["MySQL", "MongoDB"],
    "Programming": ["Java", "JavaScript", "C"],
    "Tools": ["Git", "GitHub", "VS Code"]
  };

  return (
    <section className="w-full py-4 sm:my-10 px-6 min-h-[calc(100vh-11rem)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6 sm:mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-gray-700">
                    {iconMap[skill] || '•'} <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;