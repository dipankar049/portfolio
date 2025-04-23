import React from 'react';

const Experience = () => {
  return (
    <section className="my-20 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 animate-fade-in">Experience</h2>
      <div className="space-y-10">
        {/* Unified Mentor */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold text-blue-600">MERN Stack Developer Intern</h3>
              <p className="text-sm text-gray-500">Unified Mentor</p>
              <p className="text-sm text-gray-400">Jan 2025 - Present</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 text-md">
                Developed modern full-stack applications using the MERN stack. Focused on enhancing performance and delivering responsive, scalable user experiences through close team collaboration.
              </p>
              <p className="text-gray-600 mt-2 italic">Tech used: React, Node.js, Express, MongoDB</p>
            </div>
          </div>
        </div>

        {/* Think Again Lab */}
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold text-blue-600">React Developer Intern</h3>
              <p className="text-sm text-gray-500">Think Again Lab</p>
              <p className="text-sm text-gray-400">Aug 2024 - Oct 2024</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 text-md">
                Contributed to clean and maintainable UI development using React and Tailwind. Participated in peer reviews and collaborated on UI/UX refinement with the design team.
              </p>
              <p className="text-gray-600 mt-2 italic">Tech used: React, JavaScript, Tailwind CSS, Node.js, MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;