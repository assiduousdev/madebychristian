
const INTRO_TRANSITION_LENGTH_MS = 600;
const OUTRO_TRANSITION_LENGTH_MS = 1000;
const PAGE_TRANSITION_LENGTH_MS = 400;

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
      { transform: "translateY(0)", opacity: 1, offset: 0.25 },
      
      { transform: "translateY(0)", opacity: 1, offset: 0.99 },
      
      { transform: "translateY(-100%)", opacity: 0 }
    ],
    outro: [
      { transform: "translateY(0)", opacity: 1, offset: 0.25 },
      
      { transform: "translateY(0)", opacity: 1, offset: 0.99 },
      
      { transform: "translateY(-100%)", opacity: 0 }
    ],
    background: [
      { transform: "scaleY(1)" },
      { transform: "scaleY(0)" }
    ]
  },
  transitionOptions: {
    intro: {
      duration: INTRO_TRANSITION_LENGTH_MS,
      easing: "cubic-bezier(.2,.07,.02,.7)",
      fill: "both"
    },
    outro: {
      duration: OUTRO_TRANSITION_LENGTH_MS,
      easing: "cubic-bezier(.2,.07,.02,.7)",
      fill: "both"
    },
    background: {
      duration: PAGE_TRANSITION_LENGTH_MS,
      easing: "cubic-bezier(.2,.07,.02,.7)",
      fill: "both"
    },
  },
}

export default config;