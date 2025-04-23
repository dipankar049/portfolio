import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-9rem)] px-4">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-5xl w-full">
        
      <div className="flex-shrink-0">
        <img
          src={avatar} // Make sure the avatar path is correct
          alt="Dipankar Avatar"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg object-contain bg-white pt-4"
        />
      </div>
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-blue-600">Dipankar</span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Final Year CSE Student | MERN Stack Developer | Problem Solver
          </p>
          <p className="text-md text-gray-500 mb-6">
            I love building web and mobile apps that solve real-world problems and improve user experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/portfolio/Dipankar Karan Academic Resume.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
