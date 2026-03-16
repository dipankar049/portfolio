import DSAImage from '../assets/DSA.jpg';
import ECommerceImage from '../assets/ecommerce.webp';
import TaskTrackerImage from '../assets/taskTracker.png';
import taskTrackerLiteImage from '../assets/task-tracker-lite.png';
import HabitTrackerImage from '../assets/HabitTracker.png';
import ChatRoomImage from '../assets/chat-room.png';
import { motion } from "framer-motion";
import { Github, PlayCircle, Download, Smartphone } from "lucide-react";

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
      tech: ["React", "JavaScript", "Tailwind", "CSS3"],
      liveLink: "https://dsa-simulator-three.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/dsa-simulator",
      imageUrl: DSAImage,
    },
    {
      title: "Habit Tracker",
      description: "An application that help users to form and maintain habits. Users can set routines, add events in calendar, log time spent, and view weekly, monthly summaries to track progress.",
      tech: ["React", "Tailwind CSS", "Nodejs", "MongoDB"],
      liveLink: "https://habit-tracker-wx7h.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/habit-tracker",
      imageUrl: HabitTrackerImage,
    },
    {
      title: "Habit Tracker Mobile",
      description:
        "A mobile version of the Habit Tracker web app that help users to form and maintain habits. Users can set routines, add events in calendar, log time spent, and view weekly, monthly summaries to track progress.",
      tech: ["React Native", "Expo", "Node.js", "MongoDB"],
      gitHubRepo: "https://github.com/dipankar049/habit-tracker-app",
      demoVideo: "https://youtube.com/shorts/ihboXhdU0Pk?si=Z8i2fJ1DV4pFAanq",
      downloadAPK: "https://github.com/dipankar049/habit-tracker-app/releases/download/v1.0.0/habitTrackerMobile.apk",
      // downloadAPK: "https://drive.google.com/file/d/16-PnLMVcMrDkJMiU4h7VZjk0-q3PjgrV/view?usp=drive_link",
      imageUrl: HabitTrackerImage,
    },
    {
      title: "Chat Room",
      description: "A simple real-time chat application built with React, Socket.IO, Node.js, and MongoDB. Users can join rooms, see online users, and chat in real-time.",
      tech: ["React", "Socket.IO", "Node.js", "MongoDB"],
      liveLink: "https://chat-room-blue.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/chat-room",
      imageUrl: ChatRoomImage,
    },
    {
      title: "MultiVendor E-Commerce System",
      description: "A multivendor e-commerce platform with vendor dashboards, product listings, and order management.",
      tech: ["React", "Node.js", "MySQL", "JWT"],
      gitHubRepo: "https://github.com/Prompt-Driven-Engineers/Inventory-Order-Management-System",
      imageUrl: ECommerceImage,
    },
    {
      title: "Task Tracker Lite",
      description: "A task tracker app allowing users to manage projects with features like signup, login, task creation, updating, and deletion.",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveLink: "https://task-tracker-lite.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/task-tracker-lite",
      imageUrl: taskTrackerLiteImage,
    },
    // {
    //   title: "Task Tracker App",
    //   description: "A Flutter-based mobile app to manage daily tasks with features like task creation, editing, and local storage using sqflite.",
    //   tech: ["Flutter", "Dart", "sqflite"],
    //   gitHubRepo: "https://github.com/dipankar049/TaskTrackr",
    //   imageUrl: TaskTrackerImage,
    //   downloadAPK: "https://drive.google.com/uc?export=download&id=1vPsnV1c7Qe1yRrCBWU-HrLeQrTZXrUCF"
    // }
  ];

  return (
    <section className="projects my-6 sm:my-10 px-4 min-h-[calc(100vh-60px)]">
      <motion.h2
        variants={card}
        className="text-3xl md:text-4xl font-bold text-indigo-400 text-center mb-6 sm:mb-10"
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
            whileHover={{ y: -6 }}
            onClick={() => {
              if (project.liveLink) {
                window.open(
                  project.liveLink || project.gitHubRepo,
                  "_blank"
                )
              }
            }}
            className="
              cursor-pointer
              bg-white/5
              border border-white/10
              hover:border-indigo-400/40
              backdrop-blur-xl
              rounded-2xl
              overflow-hidden
              shadow-xl
              transition-all duration-300
            "
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl group">
              {project.downloadAPK && (
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1.5 px-2 py-1 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 rounded-lg shadow-lg">
                  <Smartphone size={12} className="text-indigo-400" />
                  <span className="text-[10px] font-bold text-indigo-300 tracking-wider uppercase">
                    Android APK
                  </span>
                </div>
              )}
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Desktop Hover Overlay */}
              {/* <div className="
                absolute inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                transition
                hidden sm:flex
                items-center justify-center
              ">
                <span className="
                  px-4 py-2
                  border border-white/60
                  text-white
                  rounded-lg
                  backdrop-blur-md
                  text-sm
                  font-medium
                ">
                  View Project →
                </span>
              </div> */}
              <div
                className="
                  absolute inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition
                  hidden sm:flex
                  items-center justify-center
                "
              >

                {project.downloadAPK ? (

                  <div className="flex gap-4">

                    {project.gitHubRepo && (
                      <a
                        href={project.gitHubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border border-white/60 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}

                    {project.demoVideo && (
                      <a
                        href={project.demoVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border border-white/60 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <PlayCircle size={18} className="text-white" />
                      </a>
                    )}

                    <a
                      href={project.downloadAPK}
                      download
                      target="_self"
                      className="p-3 rounded-lg border border-white/60 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download size={18} className="text-white" />
                    </a>

                  </div>

                ) : (

                  <span
                    className="
                      px-4 py-2
                      border border-white/60
                      text-white
                      rounded-lg
                      backdrop-blur-md
                      text-sm
                      font-medium
                    "
                  >
                    View Project →
                  </span>
                )}
              </div>

              {/* Mobile Badge */}
              {project.downloadAPK ? (
                <div className="sm:hidden absolute bottom-2 right-2 flex gap-2">

                  {project.gitHubRepo && (
                    <a
                      href={project.gitHubRepo}
                      className="p-2 bg-black/60 rounded-md backdrop-blur-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  )}

                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      className="p-2 bg-black/60 rounded-md backdrop-blur-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <PlayCircle size={16} className="text-white" />
                    </a>
                  )}

                  <a
                    href={project.downloadAPK}
                    className="p-2 bg-black/60 rounded-md backdrop-blur-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download size={16} className="text-white" />
                  </a>

                </div>

              ) : (

                <div
                  className="
                    sm:hidden
                    absolute bottom-2 right-2
                    bg-black/60
                    text-white
                    text-sm
                    px-2 py-1
                    rounded-md
                    backdrop-blur-md
                  "
                >
                  Tap to View →
                </div>
              )}
              {/* <div className="
                sm:hidden
                absolute bottom-2 right-2
                bg-black/60
                text-white
                text-sm
                px-2 py-1
                rounded-md
                backdrop-blur-md
              ">
                Tap to View →
              </div> */}

            </div>

            <div className="p-4 pt-1">

              {/* Title */}
              <h3 className="text-lg font-semibold text-indigo-400">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {project.description}
              </p>

              {/* Skills Row */}
              <div className="flex flex-wrap gap-1 mt-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      text-xs
                      bg-white/10
                      px-2 py-0.5
                      rounded-md
                      text-gray-200
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              {/* <div className="flex justify-between mt-4">

                <div className="flex gap-2">

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-xs
                        bg-indigo-600
                        hover:bg-indigo-700
                        px-3 py-1.5
                        rounded-md
                        text-white
                      "
                    >
                      Live
                    </a>
                  )}

                  {project.gitHubRepo && (
                    <a
                      href={project.gitHubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-xs
                        bg-white/10
                        hover:bg-white/20
                        px-3 py-1.5
                        rounded-md
                        text-white
                      "
                    >
                      Code
                    </a>
                  )}

                </div>

                {project.downloadAPK && (
                  <a
                    href={project.downloadAPK}
                    className="text-xs text-indigo-400 hover:underline"
                  >
                    APK
                  </a>
                )}

              </div> */}

            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
