// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModalCalendly from './components/ModalCalendly';

// Main application component where all sections are assembled.
const App = () => {
  // State to control the Calendly modal overlay
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Calendly URL is read from the environment variable (must be VITE_ prefix in Vite)
  const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/YOUR_USERNAME/15min";

  // Function passed down to components to open the modal on CTA click
  const handleBookACall = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Header is sticky and responsible for navigating the main content */}
      <Header onBookACallClick={handleBookACall} />
      
      {/* Main content area. ID is used by the A11y skip-link in index.html */}
      <main id="main-content" className="pt-20"> 
        <Hero onBookACallClick={handleBookACall} />
        <About />
        <Portfolio />
        <Services onBookACallClick={handleBookACall} />
        <Contact />
      </main>
      
      <Footer />

      {/* Calendly Modal Component (Accessible, keyboard-enabled) */}
      <ModalCalendly 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        calendlyUrl={CALENDLY_URL}
      />
    </>
  );
};

export default App;