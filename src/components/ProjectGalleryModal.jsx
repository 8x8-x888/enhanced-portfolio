// src/components/ProjectGalleryModal.jsx
import React from 'react';

const ProjectGalleryModal = ({ isOpen, onClose, images = [], title = '' }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} gallery` : "Project gallery"}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-gray-900 rounded-lg shadow-xl w-full max-w-5xl p-4">
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute right-3 top-3 text-gray-200 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700">
          {images.map((src, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-[680px]">
              <img
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                className="rounded-md object-cover w-full h-[380px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGalleryModal;
