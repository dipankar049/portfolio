// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 py-4">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/dipankar049" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/dipankar-karan-9bb755278/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400" />
        </a>
        <a href="mailto:dipg543@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default Footer;