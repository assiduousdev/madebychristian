import React from 'react'

import "./Skills.css";

export default function Skills() {
  return (
    <section className="Skills">
      <div className="Skills__heading">
        <h2>My Tools</h2>
      </div>

      <div className="Skills__wrapper">
        <ul className="Skills__list">
          <li className="Skills__skill">
            <h3>HTML</h3>
            <p className="body-text-300">Usage of semantic HTML and ensuring the whole site is accessible.</p>
          </li>
          <li className="Skills__skill">
            <h3>CSS</h3>
            <p className="body-text-300">Be it via Tailwind or plain CSS, ensuring the whole site is visually appealing and responsive.</p>
          </li>
          <li className="Skills__skill">
            <h3>JavaScript</h3>
            <p className="body-text-300">Adding more life to the website. Be it vanilla or React JS, adding interaction to give users a memorable experience.</p>
          </li>
          <li className="Skills__skill">
            <h3>C#</h3>
            <p className="body-text-300">Be it via ASP .NET or simple console applications.</p>
          </li>
          <li className="Skills__skill">
            <h3>SQL</h3>
            <p className="body-text-300">Be it MySQL or MSSQL. Ensuring data integrity.</p>
          </li>
        </ul>

        <div className="Skills__spacer"></div>
      </div>

      <div className="Skills__transition">
        <h2>Work Experience</h2>
      </div>
    </section>
  )
}
