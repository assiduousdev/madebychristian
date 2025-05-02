import React from 'react'

import "./PageTransitionOutro.css";

export default function PageTransitionOutro({ ref, outro }) {
  return (
    <div className="PageTransition__outro">
      <div ref={ref} className="PageTransition__inner-text">{outro}</div>
    </div>
  )
}
