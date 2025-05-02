import React from 'react'

import "./Hero.css";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Hero() {
  return (
    <header className="Hero">
      <nav className="NavigationBar">
        <div>madebychristian</div>

        <div>Christian Lhie Besmanos</div>

        <MobileMenu />
      </nav>
    </header>
  )
}
