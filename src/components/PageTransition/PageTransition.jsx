import React, { useEffect, useRef, useState } from 'react'

import PageTransitionIntro from "./PageTransitionIntro/PageTransitionIntro";
import PageTransitionOutro from "./PageTransitionOutro/PageTransitionOutro";

import config from "./PageTransition.config";
import "./PageTransition.css";

export default function PageTransition({ setPerformingTransition }) {
  const pageTransitionRef = useRef(null);
  const pageIntroRefs = useRef(null);
  const pageOutroRef = useRef(null);

  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    async function playTransition() {
      if (!isIntroFinished) {
        // TODO: Handle animations error properly

        for (const intro of getAnimations()) {
          await intro.animate(config.transitions.intro, config.transitionOptions.intro).finished;
        }
        
        setIsIntroFinished(true);

        await pageOutroRef.current.animate(config.transitions.outro, config.transitionOptions.outro).finished;

        await pageTransitionRef.current.animate(config.transitions.background, config.transitionOptions.background).finished;

        setPerformingTransition(false);
      }
    }

    playTransition();

  }, []);

  function getAnimations() {
    return Array.from(getPageIntros()).map(([_, animation]) => animation);
  }
 
  function getPageIntros() {
    if (!pageIntroRefs.current) {
      pageIntroRefs.current = new Map();
    }

    return pageIntroRefs.current;
  }

  return (
    <section ref={pageTransitionRef} className="PageTransition">
      <div className="PageTransition__texts">
        {
          config.intros.map((intro, index) => {
            const key = `${intro}-${index}`;

            return (
              <PageTransitionIntro 
                key={key}
                ref={(node) => {
                  const map = getPageIntros();
                  map.set(key, node);

                  return () => {
                    map.delete();
                  }
                }}

                intro={intro} 
              />
            )
          })
        }

        <PageTransitionOutro 
          ref={pageOutroRef}

          outro={"made by christian"} 
        />
      </div>
    </section>
  )
}
