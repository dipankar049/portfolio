import DSAImage from '../assets/DSA.jpg';
import ECommerceImage from '../assets/ecommerce.webp';
import TaskTrackerImage from '../assets/taskTracker.png';

const Projects = () => {
    const projects = [
      {
        title: "DSA Simulator",
        description: "A platform to learn and visualize DSA algorithms.",
        tech: ["JavaScript", "React", "Tailwind"],
        liveLink: "https://github.com/dipankar049/DSA_Simulator",
        imageUrl: DSAImage,
      },
      {
        title: "Inventory Management System",
        description: "System to manage product inventory with CSV import feature.",
        tech: ["React", "Node.js", "MySQL"],
        liveLink: "https://github.com/dipankar049/Multivendor-Ecommerce-System",
        imageUrl: ECommerceImage,
      },
      {
        title: "Task Tracker App",
        description: "A Flutter-based mobile app to manage daily tasks with features like task creation, editing, and local storage using sqflite.",
        tech: ["Flutter", "Dart", "sqflite"],
        liveLink: "https://github.com/dipankar049/TaskTrackr",
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
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">
                    View Project
                    </a>
                </div>
                </div>
            ))}
            </div>
        </section>
    );
  };
  
  export default Projects;
  