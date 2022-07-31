import * as React from "react"
import { Link } from "gatsby"
import { useState } from 'react'

import * as styles from "../scss/_header.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <header>
      <div className="ttl">
        <Link to="/" aria-label="Go to the top page">
          THE PLANETS
        </Link>
      </div>
      <nav>
        <div>
          <Link to="/mercury/" aria-label="Go to Mercury page">
          mercury
          </Link>
        </div>
        <div>
          <Link to="/venus/" aria-label="Go to Venus page">
            venus
          </Link>
        </div>
        <div>
          <Link to="/earth/" aria-label="Go to Earth page">
            earth
          </Link>
        </div>
        <div>
          <Link to="/mars/" aria-label="Go to Mars page">
            mars
          </Link>
        </div>
        <div>
          <Link to="/jupiter/" aria-label="Go to Jupiter page">
            jupiter
          </Link>
        </div>
        <div>
          <Link to="/saturn/" aria-label="Go to Saturn page">
            saturn
          </Link>
        </div>
        <div>
          <Link to="/uranus/" aria-label="Go to Uranus page">
            uranus
          </Link>
        </div>
        <div>
          <Link to="/neptune/" aria-label="Go to Neptune page">
            neptune
          </Link>
        </div>
      </nav>
      <div className="hamMenuBtn">
        <button onClick={openMenu} aria-label="opne menu">
          {/* <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.248746">
            <rect width="24" height="3" fill="white"/>
            <rect y="7" width="24" height="3" fill="white"/>
            <rect y="14" width="24" height="3" fill="white"/>
            </g>
          </svg> */}
          <div className={isMenuOpen ? "isOpen" : "isClose"}>
            <span className="hamMenu1"></span>
            <span className="hamMenu2"></span>
            <span className="hamMenu3"></span>
          </div>
        </button>
      </div>
      {isMenuOpen &&
        <div className="hamMenuWrapper">
          <Link to="/mercury/" aria-label="Go to Mercury page">
            <div className="linkContent">
              <span className="circle mercury"></span>
              <span className="pageName">mercury</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/venus/" aria-label="Go to Venus page">
            <div className="linkContent">
              <span className="circle venus"></span>
              <span className="pageName">venus</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/earth/" aria-label="Go to Earth page">
            <div className="linkContent">
              <span className="circle earth"></span>
              <span className="pageName">earth</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/mars/" aria-label="Go to Mars page">
            <div className="linkContent">
              <span className="circle mars"></span>
              <span className="pageName">mars</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/jupiter/" aria-label="Go to Jupiter page">
            <div className="linkContent">
              <span className="circle jupiter"></span>
              <span className="pageName">jupiter</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/saturn/" aria-label="Go to Saturn page">
            <div className="linkContent">
              <span className="circle saturn"></span>
              <span className="pageName">saturn</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/uranus/" aria-label="Go to Uranus page">
            <div className="linkContent">
              <span className="circle uranus"></span>
              <span className="pageName">uranus</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
          <Link to="/neptune/" aria-label="Go to Neptune page">
            <div className="linkContent">
              <span className="circle neptune"></span>
              <span className="pageName">neptune</span>
              <span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>
      }
    </header>
  )
}

export default Header
