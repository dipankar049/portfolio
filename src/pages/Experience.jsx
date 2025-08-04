import React from 'react';

const Experience = () => {
  return (
    <section className="my-4 sm:my-10 px-4 md:px-12 min-h-[calc(100vh-11rem)]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-shadow-lg/30 text-blue-600 mb-6 sm:mb-10 animate-fade-in">Experience</h2>
      <div className="space-y-10">
        {/* Unified Mentor */}
        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-blue-600">MERN Stack Developer Intern</h3>
              <p className="text-base text-gray-500">Unified Mentor</p>
              <p className="text-sm text-gray-400">Jan 2025 - Jun 2025</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-500 text-shadow-lg/30 text-md">
                Developed modern full-stack applications using the MERN stack. Focused on enhancing performance and delivering responsive, scalable user experiences through close team collaboration.
              </p>
              <p className="text-gray-400 mt-2 italic">Tech used: React, Node.js, Express, MongoDB</p>
            </div>
          </div>
        </div>

        {/* Think Again Lab */}
        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-blue-600">React Developer Intern</h3>
              <p className="text-base text-gray-500">Think Again Lab</p>
              <p className="text-sm text-gray-400">Aug 2024 - Oct 2024</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-500 text-shadow-lg/30 text-md">
                Contributed to clean and maintainable UI development using React and Tailwind. Participated in peer reviews and collaborated on UI/UX refinement with the design team.
              </p>
              <p className="text-gray-400 mt-2 italic">Tech used: React, JavaScript, Tailwind CSS, Node.js, MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;