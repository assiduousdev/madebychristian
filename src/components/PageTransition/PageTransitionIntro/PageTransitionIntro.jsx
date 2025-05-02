import React from 'react'

import "./PageTransitionIntro.css";

export default function PageTransitionIntro({ ref, intro }) {
  return (
  <div className="PageTransition__intro">
    <div ref={ref} className="PageTransition__intro-text">{intro}</div>
  </div>
  )
}