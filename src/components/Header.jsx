import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'border-b-2 text-shadow-lg/50 border-blue-600 text-blue-600 hover:scale-110 transition duration-200'
    : 'hover:text-blue-500 text-shadow-lg/50 hover:scale-110 transition duration-200';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-lg/30 text-gray-300'>
      <div className='flex items-center justify-between px-4 py-4 sm:px-6 md:px-8'>
        {/* Logo */}
        <NavLink to='/' className='text-md sm:text-xl text-shadow-lg/50 font-bold hover:scale-105 transition duration-200'>
          dipankar049
        </NavLink>

        {/* Hamburger button - hidden on sm and up */}
        <button
          className='sm:hidden text-blue-700 text-2xl text-shadow-lg/50'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label='Toggle navigation'
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className='hidden sm:flex space-x-4 md:space-x-6 text-sm sm:text-lg font-semibold'>
          <NavLink to='/' className={navLinkClass}>Home</NavLink>
          <NavLink to='/about' className={navLinkClass}>About</NavLink>
          <NavLink to='/skills' className={navLinkClass}>Skills</NavLink>
          <NavLink to='/projects' className={navLinkClass}>Projects</NavLink>
          <NavLink to='/education' className={navLinkClass}>Education</NavLink>
          <NavLink to='/experience' className={navLinkClass}>Experience</NavLink>
        </nav>
      </div>

      {menuOpen && (
        <nav className='flex flex-col px-4 pb-4 space-y-2 sm:hidden text-sm font-semibold'>
          <NavLink to='/' className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to='/about' className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to='/skills' className={navLinkClass} onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to='/projects' className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to='/education' className={navLinkClass} onClick={() => setMenuOpen(false)}>Education</NavLink>
          <NavLink to='/experience' className={navLinkClass} onClick={() => setMenuOpen(false)}>Experience</NavLink>
        </nav>
      )}
    </header>
  );
}
