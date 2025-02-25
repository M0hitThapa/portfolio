import { useState } from 'react';
import PropTypes from 'prop-types';
import { navLinks } from '../Constants';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
    {navLinks.map((item) => (
      <li key={item.id} className="text-slate-200 hover:text-white font-mono font-black  max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a href={item.href} className="text-lg md:text-base hover:text-white transition-colors" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

NavItems.propTypes = {
  onClick: PropTypes.func,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className=" absolute top-6 left-6 right-6  z-50 bg-[#000000]  rounded-lg pl-1 pr-1">
      <div className="max-w-5xl mx-auto border-2 border-slate-300/20 rounded-xl p-1">
        <div className="flex justify-between items-center py-1 mx-auto sm:px-10 px-5 ">
          <div className='flex flex-col items-center text-lg  font-black text-[#db3218]'>
          <a href="/" className='bg-slate-200 font-serif  p-1 rounded-md text-3xl'>MT</a>
          
          </div>
     

          <button
            onClick={toggleMenu}
            className="text-neutral-200 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'src/assets/cross.svg' : 'src/assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
