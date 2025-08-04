import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="flex items-center pt-4 justify-center min-h-[calc(100vh-11rem)] px-4">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-5xl w-full">
        
      <div className="flex-shrink-0 rounded-full shadow-xl">
        <img
          src={avatar}
          alt="Dipankar Avatar"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg object-contain bg-white dark:bg-gray-500 pt-4"
        />
      </div>
        {/* Text Content */}
        <div className="text-center md:text-left text-gray-600 dark:text-gray-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-shadow-lg/30 font-bold text-gray-800 dark:text-gray-200 mb-4">
            Hi, I’m <span className="text-blue-600">Dipankar</span>
          </h1>
          <p className="text-xl text-shadow-lg/30 sm:text-2xl dark:text-gray-300 mb-2">
            B.Tech in Computer Science | MERN Stack Developer | Problem Solver
          </p>
          <p className="text-md sm:text-lg dark:text-gray-400 mb-6">
            I love building web and mobile apps that solve real-world problems and improve user experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/Resume_Dipankar_Karan.pdf"
              download
              className="bg-blue-600 shadow-2xl dark:bg-gray-800 dark:border dark:border-gray-200 text-white px-3 sm:px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 hover:scale-110 transition duration-400 ease-in-out"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="dark:bg-gray-800 shadow-2xl border border-blue-600 dark:border-gray-200 text-blue-600 dark:text-gray-200 px-3 sm:px-6 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 hover:scale-110 transition duration-400 ease-in-out"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;