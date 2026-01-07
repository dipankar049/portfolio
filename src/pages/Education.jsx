import React from 'react';

const Education = () => {
  return (
    <section className="education my-6 sm:-my-10 px-4 md:px-12 min-h-[calc(100vh-60px)]">
      <h2 className="text-3xl md:text-4xl font-bold text-shadow-lg/30 text-center text-blue-600 mb-6 sm:mb-10 animate-fade-in">Education</h2>
      <div className="space-y-6">
        {/* B.Tech */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg/30 hover:shadow-xl/30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-blue-600">B.Tech, Computer Science & Engineering</h3>
          <p className="text-base text-gray-500">The Neotia University</p>
          <p className="text-sm text-gray-400">2021 - 2025</p>
          <p className="text-gray-400 mt-2">CGPA: <span className="font-medium">8.59/10</span></p>
        </div>

        {/* Higher Secondary */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg/30 hover:shadow-xl/30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-blue-600">Higher Secondary Education (XII), Science</h3>
          <p className="text-base text-gray-500">Sundarban Adarsha Vidyamandir</p>
          <p className="text-sm text-gray-400">WBCHSE • Completed: 2021</p>
          <p className="text-gray-400 mt-2">Percentage: <span className="font-medium">83.80%</span></p>
        </div>

        {/* Secondary */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg/30 hover:shadow-xl/30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <h3 className="text-xl md:text-2xl text-shadow-lg/30 font-semibold text-blue-600">Secondary Education (X)</h3>
          <p className="text-base text-gray-500">Mahendraganj High School</p>
          <p className="text-sm text-gray-400">WBBSE • Completed: 2019</p>
          <p className="text-gray-400 mt-2">Percentage: <span className="font-medium">84.70%</span></p>
        </div>
      </div>
    </section>
  );
};

export default Education;