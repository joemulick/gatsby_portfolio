import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

import Navbar from "react-bootstrap/Navbar"
import { Nav } from "react-bootstrap"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          version
        }
      }
    }
  `)

  return (
    <header>
      <Navbar expand="md">
        <Navbar.Brand>
          <Link className={headerStyles.navItem} to="/">
            {data.site.siteMetadata.title} <span className={headerStyles.versionText}>v {data.site.siteMetadata.version}</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav.Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              blog
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              contact
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
