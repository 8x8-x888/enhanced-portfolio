// src/components/Services.jsx
import React from 'react';
import { SERVICE_CARDS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger'

// ServiceCard component for a single service offering
const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-primary-blue/50 transition-transform duration-300 hover:scale-[1.02]">
      <Icon className="w-8 h-8 text-primary-blue mb-4" />
      <h3 className="text-xl font-bold text-light-text mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pl-4">
        {service.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-blue mr-2 text-xl leading-none">&bull;</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component for the Services section
const Services = ({ onBookACallClick }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900" role="region" aria-label="My Automation Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header and CTA */}
        <div className="text-center mb-16">
          <button 
            onClick={onBookACallClick} 
            className="btn-primary flex items-center gap-2 mx-auto mb-6"
          >
            <PhoneCallIcon className="w-5 h-5" />
			<CalendlyTrigger
			  url="https://calendly.com/nodweb13/30min?hide_gdpr_banner=1"
			  className="btn-primary flex items-center gap-2 animate-pulse hover:scale-105 transition-transform"
			>
			  <PhoneCallIcon className="w-5 h-5" /> Book a Call
			</CalendlyTrigger>
          </button>
          <h2 className="text-light-text font-extrabold">SERVICES</h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {/* Secondary CTA area */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
            <button 
                onClick={onBookACallClick} 
                className="btn-primary"
            >
                Let's Automate Your Workflow
            </button>
            <a href="#portfolio-gallery" className="btn-secondary">
                See Real Results
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;