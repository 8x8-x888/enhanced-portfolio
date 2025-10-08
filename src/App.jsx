import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModalCalendly from './components/ModalCalendly';
import AnimatedBackground from './components/AnimatedBackground'; // Import the new background component

const App = () => {
  // State to control the Calendly modal overlay
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Calendly URL is read from the environment variable
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
      <AnimatedBackground />
      <div className="relative z-10">
        <Header onBookACallClick={handleBookACall} />
        
        <main id="main-content" className="pt-20">
          <Hero onBookACallClick={handleBookACall} />
          <About />
          <Portfolio />
          <Services onBookACallClick={handleBookACall} />
          <Contact />
        </main>
        
        <Footer />
      </div>

      <ModalCalendly 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        calendlyUrl={CALENDLY_URL}
      />
    </>
  );
};

export default App;
