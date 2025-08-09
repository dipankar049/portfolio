import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 py-4 dark:text-gray-200">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/dipankar049" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400 shadow-xl/50" />
        </a>
        <a href="https://www.linkedin.com/in/dipankar-karan-9bb755278/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400 shadow-xl/50" />
        </a>
        <a href="mailto:dipg543@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-gray-400 shadow-xl/50" />
        </a>
      </div>
    </div>
  );
};

export default Footer;