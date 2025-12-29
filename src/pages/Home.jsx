import avatar from '../assets/avatar.jpg';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className='home'>
      <div className="flex items-center pt-4 justify-center min-h-[calc(100vh-60px)] px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-5xl w-full">

          <div className="flex-shrink-0 rounded-full">
            {/* <img
          src={avatar}
          alt="Dipankar Avatar"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain bg-gray-500 pt-4"
        /> */}
            <motion.img
              src={avatar}
              alt="Dipankar Avatar"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-44 h-44 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-contain bg-gray-500 pt-4 shadow-xl/30"
            />
          </div>
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left text-gray-200"
          >
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Hi, I’m <span className="text-blue-600">Dipankar</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl sm:text-2xl mb-2">
              B.Tech in Computer Science | MERN Stack Developer
            </motion.p>

            <motion.p variants={item} className="text-md sm:text-lg text-gray-400 mb-6">
              I love building web and mobile apps that solve real-world problems.
            </motion.p>

            <motion.div
              variants={item}
              className="flex gap-4 justify-center md:justify-start"
            >
              {/* Download Resume */}
              <motion.a
                href="/Resume_Dipankar_Karan.pdf"
                download
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="shadow-xl/30 bg-gray-800 border border-gray-200 text-white px-3 sm:px-6 py-2 rounded-lg cursor-pointer"
              >
                Download Resume
              </motion.a>

              {/* View Projects */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <Link
                  to="projects"
                  offset={-80}
                  smooth
                  duration={500}
                  className="bg-gray-800 shadow-xl/30 border border-gray-200 text-gray-200 px-3 sm:px-6 py-2 rounded-lg cursor-pointer inline-block"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;