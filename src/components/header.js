import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../scss/_header.scss"

function Header () {
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
    </header>
  )
}

export default Header
