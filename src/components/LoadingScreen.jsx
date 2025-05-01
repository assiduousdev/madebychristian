import React, { useEffect, useState } from 'react'

import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [heading, setHeading] = useState();

  const ANIMATION_LENGTH_IN_MILLISECONDS = 600;
  const BASE_HEADING = "madebychristian"; 

  const characters = BASE_HEADING.split("");
  const animationDelays = ANIMATION_LENGTH_IN_MILLISECONDS / characters.length; 

  useEffect(() => {
    setHeading({ __html: getHeadingMarkup(characters, animationDelays) });
  }, []);
  
  function getHeadingMarkup(characters, animationDelays) {
    let wrappedCharacters = "";

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      const delay = animationDelays * i;

      if (i === 0) {
        wrappedCharacters += "<span aria-hidden=\"true\" class=\"word\">" + buildCharacterTemplate(delay, char);
      } else if (i === characters.length - 1) {
        wrappedCharacters += buildCharacterTemplate(delay, char) + "</span>";
      } else if (char === " ") {
        wrappedCharacters += "</span> <span class=\"word\">"
      } else {
        wrappedCharacters += buildCharacterTemplate(delay, char);
      }
    }

    return wrappedCharacters ;
  }

  function buildCharacterTemplate(delay, char) {
    return `<span class="char animated" style="--delay: ${delay}ms">${char}</span>`;
  }

  return (
    <main>
      <section className="LoadingScreen container" >
        <h1
          aria-label={BASE_HEADING} 
          dangerouslySetInnerHTML={heading} 
          className="LoadingScreen__heading"
          style={{ "--length": `${ANIMATION_LENGTH_IN_MILLISECONDS}ms` }}
        ></h1>
      </section>
    </main>
  )
}
