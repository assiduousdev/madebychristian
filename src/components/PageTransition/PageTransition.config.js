
const INTRO_TRANSITION_LENGTH_IN_MILLISECONDS = 600;
const OUTRO_TRANSITION_LENGTH_IN_MILLISECONDS = 800;

const cssVariables = {
  colors: {
    primary: `hsl(${window.getComputedStyle(document.documentElement).getPropertyValue("--primary")})`,
    accent900: `hsl(${window.getComputedStyle(document.documentElement).getPropertyValue("--accent-900")})`
  }
};

const config = {
  intros: [
    "made",
    "by",
    "christian"
  ],
  transitions: {
    intro: [
      { transform: "translateY(0)", opacity: "1", offset: 0.25 },
      
      { transform: "translateY(0)", opacity: "1", offset: 0.99 },
      
      { transform: "translateY(100%)", opacity: "0" }
    ],
    outro: [
      { transform: "translateY(0)", opacity: "1", color: cssVariables.colors.accent900, "backgroundColor": cssVariables.colors.primary },
    ]
  },
  transitionOptions: {
    intro: {
      duration: INTRO_TRANSITION_LENGTH_IN_MILLISECONDS,
      easing: "cubic-bezier(.2,.07,.02,.7)",
      fill: "both"
    },
      outro: {
      duration: OUTRO_TRANSITION_LENGTH_IN_MILLISECONDS,
      easing: "cubic-bezier(.2,.07,.02,.7)",
      fill: "both"
    },
  },

}

export default config;