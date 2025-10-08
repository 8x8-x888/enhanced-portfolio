// src/components/About.jsx
import React from 'react';

// Component for the About Me section
const About = () => {
  return (
    <section id="about-me" className="py-16 md:py-24" role="region" aria-label="About the Automation Specialist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-primary-blue text-4xl font-extrabold mb-2">ABOUT ME</h2>
          <p className="text-lg text-gray-400">Automation Specialist &bull; Philippines</p>
        </div>

        {/* Content Block */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Core Value Proposition (Gradient Box) - Preserving original HTML structure's intent */}
          <div className="md:col-span-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 p-6 rounded-xl shadow-xl border border-gray-700 h-full flex items-center">
            <p className="text-lg text-light-text leading-relaxed">
              I streamline processes and connect tools to save teams time and reduce costs. My work focuses on 
              <strong className="text-primary-blue"> Zapier workflows</strong>, 
              <strong className="text-accent-cyan"> Make scenarios</strong>, 
              <strong className="text-primary-blue"> n8n automations</strong>, and 
              <strong className="text-accent-cyan"> CRM integrations</strong> (HubSpot, Salesforce, GHL). I measure success in **hours saved**, **errors reduced**, and **revenue unlocked**.
            </p>
          </div>
          
          {/* Placeholder for Additional Info (Original HTML had a Gravatar Card here) */}
          <div className="md:col-span-1 bg-gray-800/80 p-6 rounded-xl shadow-xl flex flex-col justify-between items-start border border-gray-700">
            <h3 className="text-xl font-semibold text-light-text mb-4">Core Philosophy</h3>
            <p className="text-gray-400 italic">
              "The goal of automation is not to eliminate work, but to elevate human effort to more valuable, creative, and strategic tasks."
            </p>
            {/* You could add skill charts, a short testimonial, or a professional photo here */}
            <p className="mt-4 text-sm text-gray-500">
              2+ Years Experience in Dedicated Automation Roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;