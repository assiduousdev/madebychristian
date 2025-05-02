import React, { useRef, useState } from 'react'
import { createPortal } from "react-dom";

import "./MobileMenu.css";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  function handleClick() {
    setShowMenu((prev) => !prev);

    if (showMenu) {
      mobileMenuRef.current.focus();
    }
  }

  return (
    <div 
      tabIndex={showMenu ? 0 : -1}
      className="MobileMenu"

      ref={mobileMenuRef} 
      data-open={showMenu}
    >
      <button 
        aria-label="Open navigation menu"  
        className="MobileMenu__btn"
        
        onClick={handleClick}
      >
      </button>

      { showMenu && createPortal(
          <div 
            className="MobileMenu__menu"
          >
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>

            <div>madebychristian</div>
          </div>,
          document.body
        )
      }
    </div>
  )
}
