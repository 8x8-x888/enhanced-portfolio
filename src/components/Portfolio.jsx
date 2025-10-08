// src/components/Portfolio.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../assets/data';
import ProjectGalleryModal from './ProjectGalleryModal';

// Component assembling the Portfolio section
const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  const openGallery = (images = [], title = '') => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentImages([]);
    setCurrentTitle('');
  };

  return (
    <section id="portfolio-gallery" className="py-16 md:py-24" role="region" aria-label="Portfolio Gallery of Automation Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Header */}
        <div className="text-center mb-16">
          <h2 className="text-light-text font-extrabold mb-2">PORTFOLIO GALLERY</h2>
          <p className="text-lg text-gray-400">Selected automations and outcomes</p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
              onDemoClick={() => openGallery(project.images || [], project.title)}
            />
          ))}
        </div>

        {/* CTA after the portfolio section */}
        <div className="text-center mt-16">
          <a href="#contact-form" className="btn-primary inline-block">
            Ready to Discuss Your Project?
          </a>
        </div>
      </div>

      <ProjectGalleryModal isOpen={isOpen} onClose={closeGallery} images={currentImages} title={currentTitle} />
    </section>
  );
};

export default Portfolio;
