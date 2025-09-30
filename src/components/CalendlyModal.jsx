// src/components/CalendlyModal.jsx
import React from "react";

const CalendlyModal = ({ children }) => {
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/nodweb13/15min?hide_gdpr_banner=1",
      });
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default CalendlyModal;
