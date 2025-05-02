
import { useEffect, useRef, useState } from "react";

import Hero from "./components/Hero/Hero";
import PageTransition from "./components/PageTransition/PageTransition";

import "./App.css";

function App() { 
  const [performingTransition, setPerformingTransition] = useState(true);
  const [hidePageTransition, setHidePageTransition] = useState(true);
  const removePageTransitionTimeoutId = useRef(null);

  const PAGE_TRANSITION_REMOVAL_DELAY_MS = 100;

  useEffect(() => {
    if (!performingTransition) {
      // add delay for PageTransition removal for smoother animation
      removePageTransitionTimeoutId.current = setTimeout(() => {
        setHidePageTransition(false);
      }, PAGE_TRANSITION_REMOVAL_DELAY_MS);
    }

    return () => {
      if (removePageTransitionTimeoutId.current) {
        clearTimeout(removePageTransitionTimeoutId.current);
        removePageTransitionTimeoutId.current = null;
      }
    }
  }, [performingTransition]);

  return (
    <>
      {
        ((import.meta.env.VITE_USER_NODE_ENV !== "development" && hidePageTransition) && 
          <PageTransition setPerformingTransition={setPerformingTransition} /> 
        )
      }

      <Hero />
    </>
  )
}

export default App
