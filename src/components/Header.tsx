
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CHURCH_INFO } from '../constants.ts';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Plan Your Visit', path: '/plan-your-visit' },
    { name: 'Sundays', path: '/sundays' },
    { name: 'About', path: '/about' },
    { name: 'Next Steps', path: '/next-steps' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      {/* Top Bar - Modern Minimalist */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-50/50 text-[10px] text-gray-400 font-extrabold tracking-[0.15em] uppercase">
        <div className="flex space-x-8">
          <span className="flex items-center">
            <span className="text-brand-500 mr-2">📍</span> {CHURCH_INFO.shortLocation}
          </span>
          <span className="flex items-center">
            <span className="text-brand-500 mr-2">🕒</span> Sunday {CHURCH_INFO.sundayTime}
          </span>
        </div>
        <div className="flex space-x-4">
          <span>{CHURCH_INFO.contact.phone1}</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="mr-3 p-1.5 bg-brand-50 rounded-lg group-hover:bg-brand-100 transition-colors">
                <svg className="w-6 h-6 text-brand-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 10H22L12 4L2 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="14" r="2" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-brand-500 transition-colors duration-300 font-heading">
                The Well <span className="text-brand-500 font-light mx-0.5">/</span> Shrewsbury
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-bold tracking-tight transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-brand-500'
                    : 'text-gray-500 hover:text-brand-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/plan-your-visit"
              className="bg-brand-500 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-brand-600 transition-all duration-300 shadow-[0_8px_15px_-3px_rgba(0,51,153,0.3)] hover:shadow-[0_20px_25px_-5px_rgba(0,51,153,0.4)] hover:-translate-y-0.5"
            >
              Plan Your Visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-brand-500 hover:bg-gray-50 focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 p-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-4 text-base font-bold rounded-xl transition-all duration-300 ${
                // Fixed: used item.path instead of non-existent variable 'path'
                isActive(item.path) ? 'bg-brand-50 text-brand-500' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 px-2">
            <Link
              to="/plan-your-visit"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-brand-500 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-600 transition-all duration-300"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
