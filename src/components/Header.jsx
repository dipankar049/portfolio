import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'border-b-2 border-blue-600 text-blue-600'
    : 'hover:text-blue-500 transition';

export default function Header() {
  return (
    <div className='flex justify-between py-6 sticky top-0 z-[9999] font-bold'>
      <NavLink to='/portfolio' className="text-xl font-bold">
        dipankar049
      </NavLink>
      <div className='flex space-x-6'>
        <NavLink to='/portfolio' className={navLinkClass}>Home</NavLink>
        <NavLink to='/portfolio/about' className={navLinkClass}>About</NavLink>
        <NavLink to='/portfolio/skills' className={navLinkClass}>Skills</NavLink>
        <NavLink to='/portfolio/projects' className={navLinkClass}>Projects</NavLink>
        <NavLink to='/portfolio/education' className={navLinkClass}>Education</NavLink>
        <NavLink to='/portfolio/experience' className={navLinkClass}>Experience</NavLink>
      </div>
    </div>
  );
}