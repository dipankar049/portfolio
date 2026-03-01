import React from 'react';

const Experience = () => {
  return (
    <section className="experience my-4 sm:my-10 px-4 md:px-12 min-h-[calc(100vh-60px)]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-shadow-lg/30 text-indigo-400 mb-6 sm:mb-10 animate-fade-in">Experience</h2>
      <div className="space-y-10">
        {/* 3W Business Private Limited */}
        <div 
          className="
            bg-white/5
            border border-white/10
            hover:border-indigo-400/40
            hover:scale-102
            backdrop-blur-xl
            rounded-2xl
            p-6
            shadow-2xl
            transition-all duration-300
            cursor-pointer
          "
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-indigo-400">Full Stack Developer Intern</h3>
              <p className="text-base font-medium text-gray-300">3W Business Private Limited</p>
              <p className="text-sm text-gray-400">Sep 2025 - Present</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-400 text-shadow-lg/30 text-md">
                Contributed to production-level React Native and React web applications. Developed new features, improved UI/UX, fixed bugs, and optimized application performance. Collaborated on backend services using Node.js and MongoDB, handling API updates, data workflows, and testing to ensure stability across devices and environments.
              </p>
              <p className="text-gray-300 mt-2 italic">Tech used: React, React Native, Node.js, Express, MongoDB, CSS</p>
            </div>
          </div>
        </div>

        {/* Think Again Lab */}
        <div 
          className="
            bg-white/5
            border border-white/10
            hover:border-indigo-400/40
            hover:scale-102
            backdrop-blur-xl
            rounded-2xl
            p-6
            shadow-2xl
            transition-all duration-300
            cursor-pointer
          "
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-indigo-400">React Developer Intern</h3>
              <p className="text-base font-medium text-gray-300">Think Again Lab</p>
              <p className="text-sm text-gray-400">Aug 2024 - Oct 2024</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-400 text-shadow-lg/30 text-md">
                Contributed to clean and maintainable UI development using React and Tailwind. Participated in peer reviews and collaborated on UI/UX refinement with the design team.
              </p>
              <p className="text-gray-300 mt-2 italic">Tech used: React, JavaScript, Tailwind CSS, Node.js, MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;