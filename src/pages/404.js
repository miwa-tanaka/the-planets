import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

import "../scss/index.scss"

import earth from "../images/earthOverview.png"

const NotFoundPage = () => {
  return (
    <div className="pageWrapper">
      <title>Not found</title>
      <Header />
      <main>
        <div className="errorPageWrapper">
          <h1>
            4
            <img src={earth} alt="0" loading="lazy" width="450" height="450" />
            4
          </h1>
          <p>page not found</p>
          <Link to="/" aria-label="Go to the top page">Home</Link>
        </div>
      </main>
    </div>
  )
}

export default NotFoundPage
