import React from 'react'

import MobileMenu from "./MobileMenu/MobileMenu"

import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar__logo logo">madebychristian</div>

      <ul className="NavigationBar__links">
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">GitHub</a>
        </li>
      </ul>

      <MobileMenu />
    </nav>
  )
}
