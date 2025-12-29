import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb, SiMysql, SiExpress, SiGit, SiGithub, SiVercel, SiFirebase, SiPostman, SiPython } from 'react-icons/si';
import { BiNetworkChart } from "react-icons/bi";
import { motion } from "framer-motion";

const iconMap = {
  HTML5: <FaHtml5 className="text-orange-600" />,
  CSS3: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  React: <FaReact className="text-cyan-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  MySQL: <SiMysql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Python: <SiPython className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  Git: <SiGit className="text-orange-500" />,
  GitHub: <SiGithub className="text-gray-300" />,
  Firebase: <SiFirebase  className='text-yellow-500'/>,
  Vercel: <SiVercel/>,
  Postman: <SiPostman className="text-orange-500" />,
  "Socket.IO": <BiNetworkChart className="text-white" />,
};

const Skills = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = {
    "Frontend": ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Socket.IO"],
    "Database": ["MySQL", "MongoDB"],
    "Programming": ["Java", "JavaScript"],
    "Tools": ["Git", "GitHub", "Vercel", "Postman"]
  };


  return (
    <section className="skills w-full py-4 sm:my-10 px-6 min-h-[calc(100vh-60px)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={card}
          className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6 sm:mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={card}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 shadow-xl/50 rounded-xl p-6 cursor-pointer"
            >
              <h3 className="text-xl text-shadow-lg/50 font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={listItem}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-2 text-gray-200"
                  >
                    {iconMap[skill] || "•"} <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;