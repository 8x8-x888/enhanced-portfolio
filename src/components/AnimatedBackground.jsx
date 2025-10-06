import React, { useState, useEffect, useCallback } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { particlesConfigFull } from '../config/particles-config-full.js';
import { particlesConfigLight } from '../config/particles-config-light.js';

const AnimatedBackground = () => {
  const [init, setInit] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    /*
      This effect runs once on mount to detect hardware capabilities.
      We use navigator.hardwareConcurrency to check the number of logical CPU cores.
      If it's less than 4, we assume it's a lower-end device.
      We also check for the 'prefers-reduced-motion' accessibility setting.
    */
    const checkPerformance = () => {
      const cpuCoreCount = navigator.hardwareConcurrency;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion || (cpuCoreCount && cpuCoreCount < 4)) {
        setIsLowPerformance(true);
        console.log("Low performance mode enabled for particle background.");
      }
    };

    checkPerformance();

    // Initialize the particles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particle background loaded.", container);
  };

  if (!init) {
    return null; // Don't render anything until the engine is initialized
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={isLowPerformance ? particlesConfigLight : particlesConfigFull}
      />
    </div>
  );
};

export default AnimatedBackground;