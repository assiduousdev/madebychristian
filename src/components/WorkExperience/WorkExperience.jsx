import React from 'react'

import "./WorkExperience.css";

export default function WorkExperience() {
  return (
    <section className="WorkExperience">
      <div className="WorkExperience__wrapper">
        <div className="WorkExperience__counter">
          01
        </div>

        <ol className="WorkExperience__list">
          <li className="WorkExperience__work">
            <div className="WorkExperience__heading">
              <h3>Software Engineer</h3>
              <p>Netzwelt, Inc. <span>2023 - 2025</span></p>
            </div>

            <p className="WorkExperience__description body-text-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum dolore quasi commodi quia in autem modi facilis sunt ratione!
            </p>

            <ul className="WorkExperience__tools">
              <li><span>1</span> <span>ASP .NET</span></li>
              <li><span>2</span> <span>Svelte</span></li>
              <li><span>3</span> <span>MSSQL</span></li>
            </ul>
          </li>

          <li className="WorkExperience__work">
            <div className="WorkExperience__heading">
              <h3>Node JS Developer</h3>
              <p>Xtendly <span>2022 - 2023</span></p>
            </div>

            <p className="WorkExperience__description body-text-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum dolore quasi commodi quia in autem modi facilis sunt ratione!
            </p>

            <ul className="WorkExperience__tools">
              <li><span>1</span> <span>Node JS</span></li>
              <li><span>2</span> <span>Express JS</span></li>
              <li><span>3</span> <span>MySQL</span></li>
            </ul>
          </li>

          <li className="WorkExperience__work">
            <div className="WorkExperience__heading">
              <h3>UI Designer Intern</h3>
              <p>Pixel8 Web Solutions <span>2022 - 2022</span></p>
            </div>

            <p className="WorkExperience__description body-text-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum dolore quasi commodi quia in autem modi facilis sunt ratione!
            </p>

            <ul className="WorkExperience__tools">
              <li><span>1</span> <span>UI / UX Design</span></li>
              <li><span>2</span> <span>Prototyping</span></li>
              <li><span>3</span> <span>Adobe XD</span></li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  )
}
