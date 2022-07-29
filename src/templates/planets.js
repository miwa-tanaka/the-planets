import * as React from "react"
import { graphql } from "gatsby"
import { useState } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Header from "../components/header"

import "../scss/index.scss"

export default function TemplatePage ({ data, location }) {
  const [isOverview, setIsOverview] = useState(true);
  const [isInternal, setIsInternal] = useState(false);
  const [isSurface, setIsSurface] = useState(false);

  let planets = data.allPlanetsJson.nodes[0]

  if (location.pathname === '/Mercury/') {
    planets = data.allPlanetsJson.nodes[0]
  } else if (location.pathname === '/venus/') {
    planets = data.allPlanetsJson.nodes[1]
  } else if (location.pathname === '/earth/') {
    planets = data.allPlanetsJson.nodes[2]
  } else if (location.pathname === '/mars/') {
    planets = data.allPlanetsJson.nodes[3]
  } else if (location.pathname === '/jupiter/') {
    planets = data.allPlanetsJson.nodes[4]
  } else if (location.pathname === '/saturn/') {
    planets = data.allPlanetsJson.nodes[5]
  } else if (location.pathname === '/uranus/') {
    planets = data.allPlanetsJson.nodes[6]
  } else if (location.pathname === '/neptune/') {
    planets = data.allPlanetsJson.nodes[7]
  }

  let planetImg = getImage(planets.planetImg)
  let internalImg = getImage(planets.internalImg)
  let geologyImg = getImage(planets.geologyImg)

  const getOverview = () => {
    setIsOverview(true)
    setIsInternal(false)
    setIsSurface(false)
  }

  const getInternal = () => {
    setIsOverview(false)
    setIsInternal(true)
    setIsSurface(false)
  }

  const getGeology = () => {
    setIsOverview(false)
    setIsInternal(false)
    setIsSurface(true)
  }

  return (
    <>
      <div className="pageWrapper">
      <title>{planets.name}</title>
      <Header />
      <main>
        <div className="datesWrapper">
          <div className="imgsWrapper">
          {isOverview &&
            <GatsbyImage image={planetImg} alt='overview image' />
          }
          {isInternal &&
            <GatsbyImage image={internalImg} alt='internal structure image' />
          }
          {isSurface &&
            <GatsbyImage image={geologyImg} alt='surface geology image' />
          }
          </div>
          <div className="contentsWrapper">
            <h1>{planets.name}</h1>
            {isOverview &&
              <div>
                <p>{planets.overview.content}</p>
                <a href={planets.overview.source} target="_blank" rel="noopener noreferrer" className="wiki" aria-label="check source from Wikipedia">
                  Source :
                  <span> Wikipedia </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                  </svg>
                </a>
              </div>
            }
            {isInternal &&
              <div>
                <p>{planets.structure.content}</p>
                <a href={planets.structure.source} target="_blank" rel="noopener noreferrer" className="wiki" aria-label="check source from Wikipedia">
                  Source :
                  <span> Wikipedia </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                  </svg>
                </a>
              </div>
            }
            {isSurface &&
              <div>
                <p>{planets.geology.content}</p>
                <a href={planets.geology.source} target="_blank" rel="noopener noreferrer" className="wiki" aria-label="check source from Wikipedia">
                  Source :
                  <span> Wikipedia </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                  </svg>
                </a>
              </div>
            }
            <div className="overview">
              <button onClick={getOverview} aria-label="show overview image" className={isOverview ? planets.color : "inactive"}>
                <span>01</span>
                overview
              </button>
            </div>
            <div className="internal">
              <button onClick={getInternal} aria-label="show internal structure image" className={isInternal ? planets.color : "inactive"}>
                <span>02</span>
                internal structure
              </button>
            </div>
            <div className="surface">
              <button onClick={getGeology} aria-label="show surface geology image" className={isSurface ? planets.color : "inactive"}>
                <span>03</span>
                surface geology
              </button>
            </div>
          </div>
        </div>
        <div className="detailsWrapper">
          <div className="box">
            <span className="boxTtl">rotation time</span>
            <br />
            <span className="boxNum">{planets.rotation}</span>
          </div>
          <div className="box">
            <span className="boxTtl">revolution time</span>
            <br />
            <span className="boxNum">{planets.revolution}</span>
          </div>
          <div className="box">
            <span className="boxTtl">redius</span>
            <br />
            <span className="boxNum">{planets.radius}</span>
          </div>
          <div className="box">
            <span className="boxTtl">average temp.</span>
            <br />
            <span className="boxNum">{planets.temperature}</span>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allPlanetsJson {
      nodes {
        geologyImg {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
        color
        geology {
          content
          source
        }
        name
        overview {
          content
          source
        }
        planetImg {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
        internalImg {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
        structure {
          content
          source
        }
        rotation
        revolution
        radius
        temperature
      }
    }
  }
`
