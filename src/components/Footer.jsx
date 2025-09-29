// src/components/Footer.jsx
import React from 'react';
import { CopyrightIcon, LinkedinIcon, OnlineJobsIcon, UpworkIcon } from '../assets/Icons';

// Component for the application Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Copyright and Name */}
        <div className="flex items-center text-sm text-gray-400 space-x-2">
          <CopyrightIcon className="w-4 h-4" />
          <p>2025 &bull; Mark Angel Fernandez</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/maki13/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-primary-blue transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://www.onlinejobs.ph/jobseekers/info/1215345" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-accent-cyan transition-colors"
            aria-label="OnlineJobs.ph Profile"
          >
            {/* Using HashIcon as a distinct placeholder for OnlineJobs.ph */}
            <OnlineJobsIcon className="w-6 h-6" /> 
          </a>
          <a 
            href="https://www.upwork.com/freelancers/~017cb052b88ed08489?mp_source=share" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-green-500 transition-colors"
            aria-label="Upwork Profile"
          >
            {/* Using ClockIcon as a distinct placeholder for Upwork */}
            <UpworkIcon className="w-6 h-6" /> 
          </a>
        </div>
        
        {/* Simple Link/Credit (Optional) */}
        <div className="text-sm text-gray-500 hidden sm:block">
            Powered by React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;