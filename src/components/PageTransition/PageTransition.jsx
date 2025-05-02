import React, { useEffect, useRef, useState } from 'react'

import PageTransitionIntro from "./PageTransitionIntro/PageTransitionIntro";

import "./PageTransition.css";

export default function PageTransition() {
  const pageIntroRefs = useRef(null);
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  
  const INTRO_TRANSITION_LENGTH_IN_MILLISECONDS =  600;
  const OUTRO_TRANSITION_LENGTH_IN_MILLISECONDS =  800;
  
  const introTransition = [
    { transform: "translateY(0)", opacity: "1", offset: 0.25 },
    
    { transform: "translateY(0)", opacity: "1", offset: 0.99 },
    
    { transform: "translateY(100%)", opacity: "0" }
  ];

  const introTransitionTiming = {
    duration: INTRO_TRANSITION_LENGTH_IN_MILLISECONDS,
    easing: "cubic-bezier(.2,.07,.02,.7)",
    fill: "both"
  };

  useEffect(() => {
    async function playIntros() {
      if (!isIntroFinished) {
        // TODO: Handle animations error properly
        
        const intros = Array.from(getPageIntros()).map(([_, intro]) => intro);
        console.log(intros); 
        for (const intro of intros) {
          await intro.animate(introTransition, introTransitionTiming).finished;
        }
        setIsIntroFinished(true);
      }
    }

    playIntros();

    // clean up?

  }, []);

  const pageTransitionIntro = [
    "made",
    "by",
    "christian"
  ];

  const pageTransitionOutro = [
    "made by christian"
  ];
 
  function getPageIntros() {
    if (!pageIntroRefs.current) {
      pageIntroRefs.current = new Map();
    }

    return pageIntroRefs.current;
  }

  return (
    <section className="PageTransition">
      <div className="PageTransition__texts">
        {
          pageTransitionIntro.map((intro, index) => 
            <PageTransitionIntro 
              key={`${intro}-${index}`}  
              ref={(node) => {
                const map = getPageIntros();
                map.set(index, node);

                return () => {
                  map.delete(index);
                }
              }}

              intro={intro} 
            />
          )
        }
      </div>
    </section>
  )
}
