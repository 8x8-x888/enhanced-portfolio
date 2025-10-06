/*
  This is a lightweight configuration for older or less powerful devices.
  It reduces particle count and disables expensive line-linking to ensure a smooth experience.
*/
export const particlesConfigLight = {
  particles: {
    number: {
      value: 25, // Significantly fewer particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#06b6d4",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4, // Slightly less opaque
      random: true,
    },
    size: {
      value: 2.5, // Slightly larger to compensate for fewer numbers
      random: true,
    },
    line_linked: {
      enable: false, // Disabling line linking provides a major performance boost
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false, // Disable interactivity
      },
      resize: true,
    },
  },
  retina_detect: true,
};