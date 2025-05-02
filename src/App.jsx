
import { useEffect, useRef, useState } from "react";

import PageTransition from "./components/PageTransition/PageTransition";

import "./App.css";

function App() { 
  const [performingTransition, setPerformingTransition] = useState(true);
  const [isPageTransitionVisible, setIsPageTransitionVisible] = useState(true);
  const removePageTransitionTimeoutId = useRef(null);

  const PAGE_TRANSITION_REMOVAL_DELAY_MS = 10000;

  useEffect(() => {
    if (!performingTransition) {
      // add delay for PageTransition removal for smoother animation
      removePageTransitionTimeoutId.current = setTimeout(() => {
        setIsPageTransitionVisible(false);
      }, PAGE_TRANSITION_REMOVAL_DELAY_MS);
      console.log(removePageTransitionTimeoutId.current);
    }

    return () => {
      if (removePageTransitionTimeoutId.current) {
        console.log(removePageTransitionTimeoutId.current);
        clearTimeout(removePageTransitionTimeoutId.current);
        removePageTransitionTimeoutId.current = null;
      }
    }
  }, [performingTransition]);

  return (
    <>
      {
        isPageTransitionVisible && (
          <PageTransition setPerformingTransition={setPerformingTransition} /> 
        )
      }

      <div className="Hero">

      </div>
    </>
  )
}

export default App
