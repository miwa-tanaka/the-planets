import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

import "../scss/index.scss"

import mercury from "../images/mercuryOverview.png"
import venus from "../images/venusOverview.png"
import earth from "../images/earthOverview.png"
import mars from "../images/marsOverview.png"
import jupiter from "../images/jupiterOverview.png"
import saturn from "../images/saturnOverview.png"
import uranus from "../images/uranusOverview.png"
import neptune from "../images/neptuneOverview.png"


const IndexPage = () => {
  return (
    <div className="pageWrapper">
      <title>THE PLANETS</title>
      <Header />
      <main>
        <div className="topPageWrapper">
          <Link to="/mercury/" aria-label="Got to the mercury page" className="planetWrapper">
            <h1>Mercury</h1>
            <div className="planetImg">
              <img src={mercury} alt="mercury" loading="lazy" width="290" height="290" />
            </div>
          </Link>
          <Link to="/venus/" aria-label="Got to the venus page" className="planetWrapper">
            <h1>Venus</h1>
            <div className="planetImg">
              <img src={venus} alt="venus" loading="lazy" width="400" height="400" />
            </div>
          </Link>
          <Link to="/earth/" aria-label="Got to the earth page"  className="planetWrapper">
            <h1>Earth</h1>
            <div className="planetImg">
              <img src={earth} alt="earth" loading="lazy" width="450" height="450" />
            </div>
          </Link>
          <Link to="/mars/" aria-label="Got to the mars page" className="planetWrapper">
            <h1>Mars</h1>
            <div className="planetImg">
              <img src={mars} alt="mars" loading="lazy" width="336" height="336" />
            </div>
          </Link>
          <Link to="/jupiter/" aria-label="Got to the jupiter page" className="planetWrapper">
            <h1>Jupiter</h1>
            <div className="planetImg">
              <img src={jupiter} alt="jupiter" loading="lazy" width="582" height="582" />
            </div>
          </Link>
          <Link to="/saturn/" aria-label="Got to the saturn page" className="planetWrapper">
            <h1>Saturn</h1>
            <div className="planetImg">
              <img src={saturn} alt="saturn" loading="lazy" width="668" height="668" />
            </div>
          </Link>
          <Link to="/uranus/" aria-label="Got to the uranus page" className="planetWrapper">
            <h1>Uranus</h1>
            <div className="planetImg">
              <img src={uranus} alt="uranus" loading="lazy" width="458" height="458" />
            </div>
          </Link>
          <Link to="/neptune/" aria-label="Got to the neptune page" className="planetWrapper">
            <h1>Neptune</h1>
            <div className="planetImg">
              <img src={neptune} alt="neptune" loading="lazy" width="450" height="450" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default IndexPage
