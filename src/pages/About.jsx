const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-11rem)] bg-blue-50 dark:bg-gray-800 py-8 sm:py-0 px-6 my-4 sm:my-10 rounded-xl shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-shadow-lg/30 text-blue-700 mb-6 sm:mb-10 animate-fade-in">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-200 text-md md:text-lg text-shadow-lg/30 leading-loose backdrop-blur-sm">
          👋 Hi! I’m <span className="font-semibold text-blue-600">Dipankar</span>, a Computer Science graduate from West Bengal. I’m passionate about
          building responsive and accessible web applications and exploring real-world problem solving through code.
          <br /><br />
          💻 Tech I'm familiar with includes <span className="font-medium">React, Tailwind CSS, Node.js, Express, MongoDB</span>, and
          I also love creating cross-platform apps using <span className="font-medium">Flutter</span>.
          <br /><br />
          🚀 When I’m not building projects, I sharpen my problem-solving skills on platforms like
          <a
            href="https://leetcode.com/Dipankar_Karan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 transition px-1"
          >
            LeetCode
          </a>
          and
          <a
            href="https://www.hackerrank.com/dipb7266"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 transition px-1"
          >
            HackerRank
          </a>.
        </p>

      </div>
    </div>
  );
};

export default About;