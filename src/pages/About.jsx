import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
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

  return (
    <section className="about min-h-[calc(100vh-60px)]">
      {/* <div className="flex items-center justify-center bg-gray-800 px-6 my-4 sm:my-10 rounded-xl shadow-lg/30"> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="flex items-center justify-center bg-gray-800/90 backdrop-blur-md px-6 my-6 sm:my-10 rounded-xl shadow-lg/30"
      >
        <div className="max-w-4xl mx-auto text-center py-10 sm:py-16">

          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 sm:mb-10"
          >
            About Me
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="text-gray-200 text-md md:text-lg leading-loose"
          >
            👋 Hi! I’m{" "}
            <span className="font-semibold text-blue-500">Dipankar</span>, a
            Computer Science graduate from West Bengal. I’m passionate about
            building responsive and accessible web applications and solving
            real-world problems through code.
            <br /><br />
            💻 Tech I’m familiar with includes{" "}
            <span className="font-medium text-blue-400">
              React, Tailwind CSS, Node.js, Express, MongoDB
            </span>
            , and I also enjoy creating cross-platform apps using{" "}
            <span className="font-medium text-blue-400">React Native</span>.
            <br /><br />
            🚀 When I’m not building projects, I sharpen my problem-solving skills
            on{" "}
            <a
              href="https://leetcode.com/Dipankar_Karan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-500 hover:underline"
            >
              LeetCode
            </a>.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;