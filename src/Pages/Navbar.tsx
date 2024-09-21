import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/abou', label: 'Services' },
  { href: '/abot', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <nav
      className="w-full z-50 transition-all duration-300 mt-6 bg-transparent">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between md:justify-start h-20 px-4 md:px-12">


       {/* Desktop Menu */}
         <div className="hidden md:flex">
          <ul className="flex space-x-8 mr-36">
            {navLinks.map((link) => (
              <li key={link.href} className='group relative'>
                <a
                  href={link.href}
                  className="relative" 
                >
                  {link.label}
                  <span className={`absolute text-xs bottom-[-4px] left-0  h-[1px] bg-black transition-all
                   ${link.href === window.location.pathname ? 'w-full' : 'w-0 group-hover:w-full'} 
                   duration-300 ease-out`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <a href="/" className="flex items-center mt-4">
          <img src={logo} alt="Logo" width={150} height={40} />
        </a>


        {/* Hamburger Icon */}
        <button
          type="button"
          className="md:hidden text-gray-800"
          onClick={toggleNavbar}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-white bg-opacity-95 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-gray-800"
              onClick={toggleNavbar}
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-8 mt-8 ml-8">
            {navLinks.map((link) => (
              <li key={link.href} className='group relative'>
                <a
                  href={link.href}
                  className="text-4xl relative"
                  onClick={toggleNavbar}
                >
                  {link.label}
                  
                  <span className={`absolute text-xs bottom-[-4px] left-0  h-[1px] bg-[#818181] transition-all
                   ${link.href === window.location.pathname ? 'w-full' : 'w-0'} 
                   duration-300 ease-out`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
