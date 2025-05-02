import DSAImage from '../assets/DSA.jpg';
import ECommerceImage from '../assets/ecommerce.webp';
import TaskTrackerImage from '../assets/taskTracker.png';
import taskTrackerLiteImage from '../assets/task-tracker-lite.png';

const Projects = () => {
  const projects = [
    {
      title: "DSA Simulator",
      description: "A platform to learn and visualize DSA algorithms.",
      tech: ["React", "JavaScript", "Tailwind", "CSS"],
      liveLink: "https://dsa-simulator-three.vercel.app/",
      imageUrl: DSAImage,
    },
    {
      title: "MultiVendor E-Commerce System",
      description: "A full-featured multivendor e-commerce platform with vendor dashboards, product listings, and order management. Built using React, Node.js, MongoDB, and Tailwind CSS for a modern, responsive UI.",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      gitHubRepo: "https://github.com/dipankar049/Multivendor-Ecommerce-System",
      imageUrl: ECommerceImage,
    },
    {
      title: "Task Tracker Lite",
      description: "A multivendor e-commerce platform with product management and vendor dashboards, built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind"],
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
    }
    // Add more projects here
  ];

  return (
    <section id="projects-section" className="my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-50 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="mt-3">
                {project.tech.map((tech, index) => (
                  <span key={index} className="inline-block text-sm bg-gray-200 text-gray-800 py-1 px-2 rounded-full mr-2">
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
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>
                )}
                {project.gitHubRepo && (
                  <a
                    href={project.gitHubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded"
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
