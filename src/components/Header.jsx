import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'border-b-2 border-blue-600 text-blue-600'
    : 'hover:text-blue-500 transition';

export default function Header() {
  return (
    <div className='flex justify-between py-6 sticky top-0 z-[9999] font-bold'>
      <NavLink to='/' className="text-xl font-bold">
        dipankar049
      </NavLink>
      <div className='flex space-x-6'>
        <NavLink to='/' className={navLinkClass}>Home</NavLink>
        <NavLink to='/about' className={navLinkClass}>About</NavLink>
        <NavLink to='/skills' className={navLinkClass}>Skills</NavLink>
        <NavLink to='/projects' className={navLinkClass}>Projects</NavLink>
        <NavLink to='/education' className={navLinkClass}>Education</NavLink>
        <NavLink to='/experience' className={navLinkClass}>Experience</NavLink>
      </div>
    </div>
  );
}
