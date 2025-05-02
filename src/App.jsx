
import { useEffect, useRef, useState } from "react";

import PageTransition from "./components/PageTransition/PageTransition";

import "./App.css";

function App() { 
  const [performingTransition, setPerformingTransition] = useState(true);
  const [isPageTransitionVisible, setIsPageTransitionVisible] = useState(true);
  const removePageTransitionTimeoutId = useRef(null);

  const PAGE_TRANSITION_REMOVAL_DELAY_MS = 1000;

  useEffect(() => {
    if (!performingTransition) {
      removePageTransitionTimeoutId.current = setTimeout(() => {
        setIsPageTransitionVisible(false);
      }, PAGE_TRANSITION_REMOVAL_DELAY_MS);
    }

    return () => {
      if (removePageTransitionTimeoutId) {
        clearTimeout(removePageTransitionTimeoutId);
      }
    }
  }, [performingTransition]);

  return (
    <>
      {
        isPageTransitionVisible ?
          <PageTransition setPerformingTransition={setPerformingTransition} /> :
          null
      }

      <div className="Hero">

      </div>
    </>
  )
}

export default App
