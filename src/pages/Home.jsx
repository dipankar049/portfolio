import avatar from '../assets/avatar.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className='home'>
      <div className="flex items-center pt-4 justify-center min-h-[calc(100vh-60px)] px-4">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-5xl w-full">
        
      <div className="flex-shrink-0 rounded-full shadow-xl/30">
        <img
          src={avatar}
          alt="Dipankar Avatar"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain bg-gray-500 pt-4"
        />
      </div>
        {/* Text Content */}
        <div className="text-center md:text-left text-gray-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-shadow-lg/50 font-bold text-gray-200 mb-4">
            Hi, I’m <span className="text-blue-600">Dipankar</span>
          </h1>
          <p className="text-xl text-shadow-lg/30 sm:text-2xl text-gray-300 mb-2">
            B.Tech in Computer Science | MERN Stack Developer | Problem Solver
          </p>
          <p className="text-md sm:text-lg text-gray-400 mb-6">
            I love building web and mobile apps that solve real-world problems and improve user experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/Resume_Dipankar_Karan.pdf"
              download
              className="shadow-xl/30 bg-gray-800 border border-gray-200 text-white px-3 sm:px-6 py-2 rounded-lg hover:bg-gray-800 hover:scale-110 transition duration-400 ease-in-out"
            >
              Download Resume
            </a>
            <Link
              to="projects" offset={-80} smooth duration={500} 
              className="bg-gray-800 shadow-xl/30 border border-gray-200 text-gray-200 px-3 sm:px-6 py-2 rounded-lg hover:bg-gray-800 hover:scale-110 transition duration-400 ease-in-out cursor-pointer"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;