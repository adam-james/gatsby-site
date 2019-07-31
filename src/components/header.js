import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = () => (
  <ul
    style={{
      listStyle: "none",
      display: "flex",
      margin: "0px",
      position: "relative",
      top: "10px",
    }}
  >
    <li style={{}}>
      <Link style={{ color: "white" }} to="/page-2/">
        Page 2
      </Link>{" "}
    </li>
    <li>
      <Link style={{ color: "white", marginLeft: "16px" }} to="/about/">
        About
      </Link>
    </li>
  </ul>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
