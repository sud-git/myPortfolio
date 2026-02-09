// Safe screen check (prevents SSR / build errors)
const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

export const defaultProps = {
  easing: "cubic-bezier(0.65, 0, 0.35, 1)", // premium smooth easing
  distance: "40px",
  duration: 1100,
  desktop: true,
  mobile: true,
  reset: false, // animation runs once (clean & professional)
};

export const targetElements = [
  // ================= SECTION TITLES =================
  {
    element: ".section-title",
    animation: {
      delay: 200,
      distance: "12px",
      origin: "bottom",
    },
  },

  // ================= HERO SECTION =================
  {
    element: ".hero-title",
    animation: {
      delay: 350,
      distance: "55px",
      origin: isDesktop ? "left" : "bottom",
    },
  },

  {
    element: ".hero-cta",
    animation: {
      delay: 750,
      distance: "45px",
      origin: isDesktop ? "left" : "bottom",
    },
  },

  // ================= ABOUT SECTION =================
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 350,
      origin: "bottom",
      distance: "35px",
    },
  },

  {
    element: ".about-wrapper__info",
    animation: {
      delay: 650,
      origin: isDesktop ? "right" : "bottom",
      distance: "45px",
    },
  },

  // ================= PROJECTS =================
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 250,
      distance: "55px",
      origin: isDesktop ? "left" : "bottom",
    },
  },

  {
    element: ".project-wrapper__image",
    animation: {
      delay: 550,
      distance: "65px",
      origin: isDesktop ? "right" : "bottom",
    },
  },

  // ================= SKILLS / DSA GRAPH SECTION =================
  {
    element: ".skills-wrapper",
    animation: {
      delay: 300,
      distance: "40px",
      origin: "bottom",
    },
  },

  // ================= CONTACT SECTION =================
  {
    element: ".contact-wrapper",
    animation: {
      delay: 450,
      distance: "35px",
      origin: "bottom",
    },
  },
];
