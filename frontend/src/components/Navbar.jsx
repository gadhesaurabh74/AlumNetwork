import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    // Close dropdown when clicking outside
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar-container')) {
        setDropDown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const hiddenButtonPaths = ['/student-register', '/roleselection', '/login', '/alumni-register', '/admin'];
  const hideButtons = hiddenButtonPaths.includes(location.pathname);

  return (
    <header className="navbar-container bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <img
          className="w-40 cursor-pointer transition-transform duration-300 hover:scale-105"
          src={assets.Logo}
          alt="Logo"
          data-aos="zoom-in"
          onClick={() => navigate('/')}
        />

        {/* Desktop Navbar */}
        <nav className="hidden xl:flex space-x-10 font-medium text-gray-700">
          {['/', '/about', '/features', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `relative py-2 transition-colors ${
                  isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
                }`
              }
            >
              {path === '/' ? 'HOME' : path.toUpperCase().slice(1)}
              {/* Animated Underline */}
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  location.pathname === path ? 'w-full' : 'hover:w-full'
                }`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Buttons */}
        {!hideButtons && (
          <div className="hidden xl:flex space-x-4">
            <button
              onClick={() => navigate('/roleselection')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full transition-transform hover:bg-blue-500 hover:scale-105"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-gray-800 text-white px-6 py-2 rounded-full transition-transform hover:bg-gray-700 hover:scale-105"
            >
              Login
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={() => setDropDown(!dropDown)}>
          {dropDown ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white shadow-md transition-all duration-300 ${
          dropDown ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6 backdrop-blur-lg bg-opacity-80">
          {['/', '/about', '/features', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `text-lg transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'}`
              }
              onClick={() => setDropDown(false)}
            >
              {path === '/' ? 'HOME' : path.toUpperCase().slice(1)}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          {!hideButtons && (
            <div className="flex flex-col w-full px-8 gap-3">
              <button
                onClick={() => navigate('/roleselection')}
                className="bg-blue-600 text-white px-6 py-3 rounded-md w-full transition-transform hover:bg-blue-500 hover:scale-105"
              >
                Create Account
              </button>
              <button
                onClick={() => navigate('/login')}
                className="bg-gray-800 text-white px-6 py-3 rounded-md w-full transition-transform hover:bg-gray-700 hover:scale-105"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
