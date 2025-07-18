import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb, SiMysql, SiExpress, SiGit, SiGithub, SiVercel, SiFirebase, SiPython } from 'react-icons/si';
import SiVSCode from "../assets/vscode.svg";

const iconMap = {
  HTML5: <FaHtml5 className="text-orange-600" />,
  CSS3: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  React: <FaReact className="text-cyan-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-800 dark:text-gray-300" />,
  MySQL: <SiMysql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Python: <SiPython className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  Git: <SiGit className="text-orange-500" />,
  GitHub: <SiGithub className="text-gray-800 dark:text-gray-300" />,
  Firebase: <SiFirebase  className='text-yellow-500'/>,
  Vercel: <SiVercel/>,
  "VS Code": <img src={SiVSCode} alt="VS Code" className="w-4 h-4" />,
};

const Skills = () => {
  const skillCategories = {
    "Frontend": ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Firebase"],
    "Database": ["MySQL", "MongoDB"],
    "Programming": ["Java", "JavaScript", "Python"],
    "Tools": ["Git", "GitHub", "VS Code", "Vercel"]
  };

  return (
    <section className="w-full py-4 sm:my-10 px-6 min-h-[calc(100vh-11rem)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105 transition duration-400 ease-in-out cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:translate-x-3 transition duration-300">
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