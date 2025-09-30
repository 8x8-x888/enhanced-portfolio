// src/components/CalendlyTrigger.jsx
import React from 'react';

/**
 * CalendlyTrigger
 * Props:
 *  - url (string): full Calendly URL (include ?hide_gdpr_banner=1 if you want)
 *  - className (string): optional additional classes for button styling
 *  - children: button text / inner content
 *
 * Usage:
 *  <CalendlyTrigger url="https://calendly.com/nodweb13/30min?hide_gdpr_banner=1" className="btn-primary">Book a Call</CalendlyTrigger>
 */
const CalendlyTrigger = ({ url, className = '', children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    // Fallback: open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={typeof children === 'string' ? children : 'Open Calendly'}
    >
      {children}
    </button>
  );
};

export default CalendlyTrigger;
