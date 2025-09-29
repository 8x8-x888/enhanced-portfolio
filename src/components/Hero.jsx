// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { HERO_TAGS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons'; 

// Component for the main Hero section
const Hero = ({ onBookACallClick }) => {
  const imageRef = useRef(null);

  // Lazy-loading for the main hero image (placeholder implementation)
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.loading = 'lazy';
    }
  }, []);

  return (
    <section id="hero" className="py-16 md:py-24 bg-dark-bg" role="region" aria-label="Hero Section: Build, Automate, Scale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content Column */}
        <div className="space-y-6 animate-fadeInLeft">
          <div className="pill-tech">
            Automation &bull; CRM &bull; Integrations
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            BUILD &middot; AUTOMATE &middot; SCALE
          </h1>

          <p className="text-lg text-gray-300 max-w-lg">
            Turn manual tasks into scalable systems. I help businesses grow smarter with automation, CRM integrations, and optimized workflows across 
            <span className="text-accent-cyan font-bold"> Zapier</span>, 
            <span className="text-accent-cyan font-bold"> Make</span>, 
            <span className="text-accent-cyan font-bold"> n8n</span>, and 
            <span className="gradient-text font-extrabold"> GoHighLevel</span>.
          </p>

          {/* CTA Buttons - Prominent Calendly CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onBookACallClick} 
              className="btn-primary flex items-center gap-2"
              aria-label="Book a call to start building your automation workflow"
            >
              <PhoneCallIcon className="w-5 h-5" />
              Book a Call Now (Primary CTA)
            </button>
            <a href="#portfolio-gallery" className="btn-secondary">
              View Case Studies
            </a>
          </div>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {HERO_TAGS.map((tag) => (
              <a key={tag.name} href={tag.href} className="text-sm font-medium px-3 py-1 bg-gray-800 text-gray-300 rounded-full hover:bg-primary-blue hover:text-white transition-colors">
                {tag.name}
              </a>
            ))}
          </div>
        </div>
        
        {/* Image/Gravatar Column */}
        <div className="hidden md:block md:justify-self-end animate-fadeInRight">
          {/* Placeholder for the professional gravatar/hero image */}
          <img
            ref={imageRef}
            src="/assets/hero.webp" // User must provide this image (e.g., the original Gravatar image)
            alt="Mark Angel Fernandez - Automation Specialist"
            className="rounded-xl shadow-2xl w-full max-w-sm lg:max-w-md object-cover border-4 border-primary-blue/50"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;