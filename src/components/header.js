import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100vw;
  padding: 5rem;
  font-family: 'Baloo Tammudu', cursive;
  color: #fdbb1c;
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
`
const LinkText = styled.div``

const Header = ({ siteTitle }) => (
  <Container>
    <Title>{siteTitle}</Title>
    <Navbar />
  </Container>
)

export default Header
