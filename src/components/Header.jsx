// src/components/Header.jsx
import React, { useState } from 'react';
import { NAV_LINKS } from '../assets/data';
import { MenuIcon, CloseIcon, UserIcon } from '../assets/Icons'; 

// Component for the navigation menu item
const NavItem = ({ name, href, onLinkClick }) => (
  <a
    href={href}
    onClick={onLinkClick}
    className="block text-lg lg:inline-block lg:text-base font-semibold text-light-text hover:text-primary-blue transition-colors duration-200 py-2 lg:py-0 border-b border-gray-700 lg:border-none"
  >
    {name}
  </a>
);

// Header component - Sticky and Responsive
const Header = ({ onBookACallClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu and execute custom handler (for anchor links/modal)
  const handleLinkClick = () => {
    setIsOpen(false);
    // Anchor links handle smooth scrolling automatically via CSS/HTML
  };

  // Handler for the CTA button in the header
  const handleCtaClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onBookACallClick();
  }

  return (
    <header className="fixed w-full z-50 bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-gray-800" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo/Identity */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} role="button" aria-label="Scroll to top and navigate to home">
          <UserIcon className="w-8 h-8 text-primary-blue" /> {/* Placeholder icon for the logo */}
          <div className="hidden sm:block">
            <div className="font-bold text-lg leading-tight text-light-text">MARK ANGEL FERNANDEZ</div>
            <div className="text-xs font-medium text-gray-400">NextGen VA</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.name} {...link} onLinkClick={handleLinkClick} />
          ))}
          <button 
            onClick={handleCtaClick} 
            className="btn-primary ml-4 py-2 text-sm"
          >
            Book a Call
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-light-text hover:text-primary-blue transition-colors p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 p-4 border-t border-gray-800' : 'max-h-0 opacity-0 p-0'}`}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.name} {...link} onLinkClick={handleLinkClick} />
          ))}
          <button 
            onClick={handleCtaClick} 
            className="btn-primary w-full mt-4"
          >
            Book a Call
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;