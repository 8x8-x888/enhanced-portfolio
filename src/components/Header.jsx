// src/components/Header.jsx
import React, { useState } from 'react';
import { NAV_LINKS } from '../assets/data';
import { MenuIcon, CloseIcon, UserIcon } from '../assets/Icons';

// Small Nav item component
const NavItem = ({ name, href, onLinkClick }) => (
  <a
    href={href}
    onClick={onLinkClick}
    className="block text-lg lg:inline-block lg:text-base font-medium text-gray-200 hover:text-white transition-colors py-2 lg:py-0"
  >
    {name}
  </a>
);

const Header = ({ onBookACallClick }) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e) => {
    // Close mobile menu if a link is clicked
    setOpen(false);
  };

  const handleCtaClick = () => {
    if (typeof onBookACallClick === 'function') {
      onBookACallClick();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/60 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/Portfolio-Logo.png" alt="Portfolio logo" className="w-10 h-10 rounded-md" />
            <span className="text-white font-bold">NextGenVA</span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.name} {...link} onLinkClick={handleLinkClick} />
          ))}
          <button 
            onClick={handleCtaClick} 
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow"
          >
            <UserIcon className="w-4 h-4" />
            Book a Call
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800"
          >
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.name} {...link} onLinkClick={handleLinkClick} />
            ))}
            <div>
              <button 
                onClick={() => { handleCtaClick(); setOpen(false); }} 
                className="btn-primary w-full mt-2"
              >
                Book a Call
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
