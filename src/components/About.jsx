const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-9rem)] bg-gradient-to-br from-blue-50 to-white px-6 mx-20 rounded-xl shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 animate-fade-in">
          About Me
        </h2>
        <p className="text-gray-700 text-md md:text-lg leading-loose backdrop-blur-sm">
          👋 Hi! I’m <span className="font-semibold text-blue-600">Dipankar</span>, a final year Computer Science student from West Bengal. I’m passionate about
          building responsive and accessible web applications and exploring real-world problem solving through code.
          <br /><br />
          💻 Tech I'm familiar with includes <span className="font-medium">React, Node.js, Express, MongoDB</span>, and
          I also love creating cross-platform apps using <span className="font-medium">Flutter</span>.
          <br /><br />
          🚀 When I’m not building projects, I sharpen my problem-solving skills on platforms like
          <span className="font-medium"> LeetCode </span> and <span className="font-medium"> HackerRank</span>.
        </p>
      </div>
    </div>
  );
};

export default About;