import DSAImage from '../assets/DSA.jpg';
import ECommerceImage from '../assets/ecommerce.webp';
import TaskTrackerImage from '../assets/taskTracker.png';
import taskTrackerLiteImage from '../assets/task-tracker-lite.png';
import HabitTrackerImage from '../assets/HabitTracker.png';
import ChatRoomImage from '../assets/chat-room.jpg';
import { motion } from "framer-motion";

const Projects = () => {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageAnim = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  const projects = [
    {
      title: "DSA Simulator",
      description: "A platform to visualize DSA algorithms like array and linked list operations, and various sorting and searching algorithms, with step-by-step animations.",
      tech: ["React", "JavaScript", "Tailwind", "CSS3", "Routing"],
      liveLink: "https://dsa-simulator-three.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/dsa-simulator",
      imageUrl: DSAImage,
    },
    {
      title: "Habit Tracker",
      description: "An application that help users to form and maintain habits. Users can set routines, add events in calendar, log time spent, and view weekly, monthly summaries to track progress.",
      tech: ["React", "Tailwind", "Express.js", "MongoDB", "JWT", "Recharts", "React Big Calendar"],
      liveLink: "https://habit-tracker-wx7h.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/habit-tracker",
      imageUrl: HabitTrackerImage,
    },
    {
      title: "Chat Room",
      description: "A simple real-time chat application built with React, Socket.IO, Node.js, and MongoDB. Users can join rooms, see online users, and chat in real-time.",
      tech: ["React", "Tailwind CSS", "Socket.IO", "Node.js", "MongoDB"],
      liveLink: "https://chat-room-blue.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/chat-room",
      imageUrl: ChatRoomImage,
    },
    {
      title: "MultiVendor E-Commerce System",
      description: "A multivendor e-commerce platform with vendor dashboards, product listings, and order management. Built using React, Node.js, MongoDB, and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Node.js", "MySQL", "JWT", "React Router"],
      gitHubRepo: "https://github.com/Prompt-Driven-Engineers/Inventory-Order-Management-System",
      imageUrl: ECommerceImage,
    },
    {
      title: "Task Tracker Lite",
      description: "A task tracker app allowing users to manage projects with features like signup, login, task creation, updating, and deletion. Built using React, Node.js, MongoDB, and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveLink: "https://task-tracker-lite.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/task-tracker-lite",
      imageUrl: taskTrackerLiteImage,
    },
    {
      title: "Task Tracker App",
      description: "A Flutter-based mobile app to manage daily tasks with features like task creation, editing, and local storage using sqflite.",
      tech: ["Flutter", "Dart", "sqflite"],
      gitHubRepo: "https://github.com/dipankar049/TaskTrackr",
      imageUrl: TaskTrackerImage,
      downloadAPK: "https://drive.google.com/uc?export=download&id=1vPsnV1c7Qe1yRrCBWU-HrLeQrTZXrUCF"
    }
  ];

  return (
    <section className="projects my-4 sm:my-10 px-4 min-h-[calc(100vh-60px)]">
      <motion.h2
        variants={card}
        className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6 sm:mb-10"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 text-gray-200 shadow-lg/50 rounded-lg overflow-hidden"
          >
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              variants={imageAnim}
              whileHover="hover"
              className="w-full aspect-4/2 object-center"
            />
            <div className="p-4">
              <h3 className="text-xl text-blue-400 text-shadow-lg/50 font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-shadow-lg/20 mt-2">{project.description}</p>
              <div className="mt-1">
                {project.tech.map((tech, index) => (
                  <span key={index} className="inline-block shadow-lg/10 text-sm bg-gray-700 text-gray-200 py-1 px-2 rounded-full mr-2 mt-2">
                    {tech}
                  </span>
                ))}

              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md"
                  >
                    Live Demo
                  </motion.a>
                )}
                {project.downloadAPK && (
                  <a
                    href={project.downloadAPK}
                    download
                    className="text-white shadow-lg/10 bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md cursor-pointer"
                  >
                    📱 Download Android App
                  </a>
                )}
                {project.gitHubRepo && (
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.gitHubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-1.5 rounded-md"
                  >
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
