import React from 'react'

import NavigationBar from "../NavigationBar/NavigationBar";

import "./Hero.css";

export default function Hero() {
  return (
    <header className="Hero container">
      <NavigationBar />

      <h1 className="Hero__heading">
        <span>Hi there,</span>
        <span>I'm Christian</span>
      </h1>
      <p className="Hero__description body-text-300">A creative developer crafting visually engaging, interactive websites with HTML, CSS, and JavaScript.</p>
    </header>
  )
}