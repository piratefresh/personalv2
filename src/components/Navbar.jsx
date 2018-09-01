import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  margin: 0 auto;
`

class Navbar extends Component {
  render() {
    return (
      <Nav>
        {/*         <Link
          to="/another-page/"
          style={{ textDecoration: 'none', color: '#2c2c2c' }}
        >
          About
        </Link>
        <Link
          to="/another-page/"
          style={{ textDecoration: 'none', color: '#2c2c2c' }}
        >
          Another page
        </Link>
        <Link
          to="/another-page/"
          style={{ textDecoration: 'none', color: '#2c2c2c' }}
        >
          Another page
        </Link>
        <Link
          to="/another-page/"
          style={{ textDecoration: 'none', color: '#2c2c2c' }}
        >
          Another page
        </Link>
        <Link
          to="/another-page/"
          style={{ textDecoration: 'none', color: '#2c2c2c' }}
        >
          Another page
        </Link> */}
      </Nav>
    )
  }
}

export default Navbar
