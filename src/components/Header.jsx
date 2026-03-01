import { useState } from 'react';
import { Link } from "react-scroll";
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";

const LinkClass = 'hover:text-sky-400 sm:text-shadow-lg/50 hover:scale-110 transition duration-200';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className='fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-lg/30 text-gray-300'>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // className="fixed top-0 left-0 w-full z-50 bg-gray-800 sm:bg-transparent shadow-lg/30 sm:shadow-none text-gray-300"
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%]
        z-50
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-2xl
        text-gray-300
      "
    >
      <div className='flex items-center justify-between px-4 py-4 sm:px-6 md:px-8'>
        {/* Logo */}
        <Link to='home' offset={-80} smooth duration={500} className='text-md sm:text-xl text-shadow-lg/50 font-bold hover:scale-105 transition duration-200 cursor-pointer'>
          <span className="text-white font-bold tracking-wide">
            dipankar049
          </span>
        </Link>

        {/* Hamburger button - hidden on sm and up */}
        <button
          className='sm:hidden text-gray-300 hover:text-white text-2xl text-shadow-lg/50'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label='Toggle navigation'
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className='hidden sm:flex space-x-4 md:space-x-6 text-sm sm:text-lg font-semibold'>
          <Link to='home' offset={-80} smooth duration={500} style={{ cursor: 'pointer' }} className={LinkClass}>Home</Link>
          <Link to='about' offset={-80} smooth duration={500} style={{ cursor: 'pointer' }} className={LinkClass}>About</Link>
          <Link to='skills' offset={-80} smooth duration={500} style={{ cursor: 'pointer' }} className={LinkClass}>Skills</Link>
          <Link to='projects' offset={-80} smooth duration={500} style={{ cursor: 'pointer' }} className={LinkClass}>Projects</Link>
          <Link to='experience' offset={-80} smooth duration={500} style={{ cursor: 'pointer' }} className={LinkClass}>Experience</Link>
          <Link to='education' offset={-80} smooth duration={500} style={{ cursor: 'pointer' }} className={LinkClass}>Education</Link>
        </nav>
      </div>

      {menuOpen && (
        <nav 
          className='flex flex-col px-6 pb-4 space-y-2 sm:hidden text-sm font-semibold'
        >
          <Link to='home' offset={-70} smooth duration={500} className={LinkClass} onClick={() => setMenuOpen(false)}>➛ Home</Link>
          <Link to='about' offset={-70} smooth duration={500} className={LinkClass} onClick={() => setMenuOpen(false)}>➛ About</Link>
          <Link to='skills' offset={-70} smooth duration={500} className={LinkClass} onClick={() => setMenuOpen(false)}>➛ Skills</Link>
          <Link to='projects' offset={-70} smooth duration={500} className={LinkClass} onClick={() => setMenuOpen(false)}>➛ Projects</Link>
          <Link to='experience' offset={-70} smooth duration={500} className={LinkClass} onClick={() => setMenuOpen(false)}>➛ Experience</Link>
          <Link to='education' offset={-70} smooth duration={500} className={LinkClass} onClick={() => setMenuOpen(false)}>➛ Education</Link>
        </nav>
      )}
    </motion.header>
  );
}
