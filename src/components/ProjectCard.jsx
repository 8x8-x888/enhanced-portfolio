// src/components/ProjectCard.jsx
import React from 'react';

// ProjectCard component for displaying a single portfolio item
const ProjectCard = ({ project, reverse = false }) => {
  // Determine order for visual variation (image/text swap)
  const orderClass = reverse ? 'md:order-2' : 'md:order-1';
  const imageClass = reverse ? 'md:order-1' : 'md:order-2';

  return (
    <article className="grid md:grid-cols-2 gap-8 items-center bg-gray-800 rounded-xl shadow-2xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-primary-blue/30" role="group" aria-labelledby={`project-title-${project.id}`}>
      
      {/* Project Text Content */}
      <div className={`space-y-4 ${orderClass}`}>
        <h3 id={`project-title-${project.id}`} className="text-2xl font-bold text-primary-blue">
          {project.title}
        </h3>
        
        {/* The blockquote text from the original HTML */}
        <blockquote className="text-lg italic text-gray-300 border-l-4 border-accent-cyan pl-4 py-1">
          {project.quote}
        </blockquote>

        {/* Tools/Tech Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <span key={tool.name} className="pill-tech">
                <Icon className="w-4 h-4" />
                {tool.name}
              </span>
            );
          })}
        </div>
        
        {/* Optional: A link to a detailed case study */}
        <a 
          href="#" 
          className="inline-block mt-4 text-sm font-semibold text-primary-blue hover:text-accent-cyan transition-colors"
          aria-label={`View detailed case study for ${project.title}`}
        >
          View Live Demo (If applicable) &rarr;
        </a>
      </div>

      {/* Project Image/Screenshot */}
      <div className={`${imageClass} rounded-lg overflow-hidden shadow-xl border-4 border-gray-700`}>
        {/* Images are set to lazy load and use webp for optimization */}
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.05]"
          loading="lazy"
          width="960" // Placeholder dimensions based on original screenshot size
          height="540"
        />
      </div>
    </article>
  );
};

export default ProjectCard;