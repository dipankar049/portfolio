import DSAImage from '../assets/DSA.jpg';
import ECommerceImage from '../assets/ecommerce.webp';
import TaskTrackerImage from '../assets/taskTracker.png';
import taskTrackerLiteImage from '../assets/task-tracker-lite.png';

const Projects = () => {
  const projects = [
    {
      title: "DSA Simulator",
      description: "A platform to visualize DSA algorithms like array and linked list operations, and various sorting and searching algorithms, with step-by-step animations.",
      tech: ["React", "JavaScript", "Tailwind", "CSS"],
      liveLink: "https://dsa-simulator-three.vercel.app/",
      gitHubRepo: "https://github.com/dipankar049/dsa-simulator",
      imageUrl: DSAImage,
    },
    {
      title: "MultiVendor E-Commerce System",
      description: "A multivendor e-commerce platform with vendor dashboards, product listings, and order management. Built using React, Node.js, MongoDB, and Tailwind CSS.",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      gitHubRepo: "https://github.com/Prompt-Driven-Engineers/Inventory-Order-Management-System",
      imageUrl: ECommerceImage,
    },
    {
      title: "Task Tracker Lite",
      description: "A task tracker app allowing users to manage projects with features like signup, login, task creation, updating, and deletion. Built using React, Node.js, MongoDB, and Tailwind CSS.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
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
    <section id="projects-section" className="my-4 sm:my-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-shadow-lg/30 text-blue-600 text-center mb-6 sm:mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg/50 rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in">
            <img src={project.imageUrl} alt={project.title} className="w-full aspect-4/2 object-center" />
            <div className="p-4">
              <h3 className="text-xl text-blue-400 text-shadow-lg/50 font-semibold">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 text-shadow-lg/20 mt-2">{project.description}</p>
              <div className="mt-3">
                {project.tech.map((tech, index) => (
                  <span key={index} className="inline-block shadow-lg/20 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded-full mr-2 mt-1">
                    {tech}
                  </span>
                ))}

              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white shadow-lg/30 bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md cursor-pointer"
                  >
                    Live Demo
                  </a>
                )}
                {project.downloadAPK && (
                  <a
                    href={project.downloadAPK}
                    download
                    className="text-white shadow-lg/30 bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md cursor-pointer"
                  >
                    📱 Download Android App
                  </a>
                )}
                {project.gitHubRepo && (
                  <a
                    href={project.gitHubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white shadow-lg/30 bg-gray-800 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 px-4 py-1 rounded-md cursor-pointer"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
