
const INTRO_TRANSITION_LENGTH_MS = 600;
const OUTRO_TRANSITION_LENGTH_MS = 600;
const PAGE_TRANSITION_LENGTH_MS = 950;

const TRANSITIONS_EASING = "cubic-bezier(.74,-0.02,0,1.12)";

/*

// Was used before when animating color/background color changes though WAAPI, left for reference

const cssVariables = {
  colors: {
    primary: `hsl(${window.getComputedStyle(document.documentElement).getPropertyValue("--primary")})`,
    accent900: `hsl(${window.getComputedStyle(document.documentElement).getPropertyValue("--accent-900")})`
  }
};

*/

const config = {
  intros: [
    "made",
    "by",
    "christian"
  ],
  transitions: {
    intro: [
      { transform: "translateY(0)", opacity: 1, offset: 0.1 },
            
      { transform: "translateY(0)", opacity: 1, offset: 0.8 },

      { transform: "translateY(100%)", opacity: 0 }
    ],
    outro: [
      { transform: "translateY(0)", opacity: 1, offset: 0.1 },
      
      { transform: "translateY(0)", opacity: 1, offset: 0.8 },
      
      { transform: "translateY(100%)", opacity: 0 }
    ],
    background: [
      { transform: "scaleY(1)" },
      { transform: "scaleY(0)" }
    ]
  },
  transitionOptions: {
    intro: {
      duration: INTRO_TRANSITION_LENGTH_MS,
      easing: "ease-in",
      fill: "both"
    },
    outro: {
      duration: OUTRO_TRANSITION_LENGTH_MS,
      easing: "ease-in",
      fill: "both"
    },
    background: {
      duration: PAGE_TRANSITION_LENGTH_MS,
      easing: TRANSITIONS_EASING,
      fill: "both"
    },
  },
}

export default config;