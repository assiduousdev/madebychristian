
import "./App.css";

function App() {
  const INTRO_TRANSITION_LENGTH_IN_MILLISECONDS =  600;
  const OUTRO_TRANSITION_LENGTH_IN_MILLISECONDS =  800;
  const pageTransitionIntro = [
    "made",
    "by",
    "christian",
  ];

  const pageTransitionOutro = [
    "made by christian"
  ];
 
  return (
    <>
      <section className="PageTransition">
        <div className="PageTransition__texts" style={{ "--intro-transition-length": `${ INTRO_TRANSITION_LENGTH_IN_MILLISECONDS }ms` }}>
          {
            pageTransitionIntro.map((intro, index) => 
              <div 
                key={`${intro}-${index}`}
                className="PageTransition__intro-wrapper"
                style={{
                  "--intro-transition-delay" : `${ INTRO_TRANSITION_LENGTH_IN_MILLISECONDS * index }ms`,
                  "zIndex": (pageTransitionIntro.length + pageTransitionOutro.length) - index
                }}
              >
                <div className="PageTransition__inner-text">{intro}</div>
              </div>
            )
          }

          {
            pageTransitionOutro.map((outro, index) => 
              <div 
                key={`${outro}-${index}`}
                className="PageTransition__outro-wrapper"
                style={{
                  "--outro-transition-length" : `${ (INTRO_TRANSITION_LENGTH_IN_MILLISECONDS * pageTransitionIntro.length) + OUTRO_TRANSITION_LENGTH_IN_MILLISECONDS }ms`,
                  "--outro-transition-delay" : `${ INTRO_TRANSITION_LENGTH_IN_MILLISECONDS * (pageTransitionIntro.length + index) }ms`,
                  "zIndex": pageTransitionOutro.length - index
                }}
              >
                <div className="PageTransition__inner-text">{outro}</div>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default App
