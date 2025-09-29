// src/components/ModalCalendly.jsx
import React, { useRef, useEffect, useCallback } from 'react';
import { CloseIcon } from '../assets/Icons';

// Modal component for the Calendly scheduler (accessible overlay)
const ModalCalendly = ({ isOpen, onClose, calendlyUrl }) => {
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  // Handles closing the modal via ESC key
  const handleKeydown = useCallback((event) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  // Handles closing the modal when clicking outside
  const handleOverlayClick = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen) {
      // Focus on the modal itself to capture keyboard events
      modalRef.current.focus();
      // Disable background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable background scrolling
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Calendly Appointment Scheduler"
      tabIndex={-1} // Makes the div focusable for keyboard navigation
      className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl h-full max-h-[90vh] bg-dark-bg rounded-xl shadow-2xl flex flex-col overflow-hidden transform transition-transform duration-300 scale-100"
        role="document"
      >
        {/* Modal Header/Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold text-light-text">Book Your Automation Call</h3>
          <button
            onClick={onClose}
            aria-label="Close scheduler modal"
            className="p-2 rounded-full text-light-text hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Calendly Iframe */}
        <div className="flex-grow">
          {/* Note: The URL must be the embedded/inline scheduling page link */}
          <iframe
            ref={iframeRef}
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            loading="lazy"
            title="Calendly Scheduler"
          >
            {/* Fallback link for users whose browsers block iframes */}
            <p className="p-4 text-center text-gray-400">
              Your browser does not support iframes. Please click to <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-primary-blue underline">book your call in a new tab</a>.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalCalendly;