
import { useEffect, useRef, useState } from "react";

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
        hidePageTransition && (
          <PageTransition setPerformingTransition={setPerformingTransition} /> 
        )
      }

      <div className="Hero">

      </div>
    </>
  )
}

export default App
