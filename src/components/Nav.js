import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const FooterLink = s.a`
  display: inline-block;
  margin-right: 1em;
  color: black;
  font-size: 20px;
  :hover {
    color: #2a414d
  }
`

const StyledLink = s(Link)`
  color: black !important;
`

const MobileDiv = s.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  margin-bottom: 1em;
`

const LaptopDiv = s.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MyNavBar = () => (
  <>
    <LaptopDiv className="col-md-3" style={{ paddingLeft: '5em' }}>
      <div className="position-fixed text-center">
        <p className="h3" style={{ marginBottom: '1em' }}> Peter Baile Chen </p>
        <StyledLink to="/"> Home </StyledLink>
        <br />
        <StyledLink to="/about">About Me</StyledLink>
        <br />
        <StyledLink to="/work">Work</StyledLink>
        <br />
        <StyledLink to="/blogs">Blogs</StyledLink>
        <div style={{ marginTop: '1em' }}>
          <FooterLink href="https://github.com/peterbaile" target="_blank">
            <i className="fab fa-github" />
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/peter-chen-ba7847153/" target="_blank">
            <i className="fab fa-linkedin" />
          </FooterLink>
          <FooterLink href="mailto: cbaile@seas.upenn.edu">
            <i className="fas fa-envelope" />
          </FooterLink>
        </div>
      </div>
    </LaptopDiv>
    <MobileDiv className="col-md-3">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Peter Baile Chen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link>
              <FooterLink href="https://github.com/peterbaile"> <i className="fab fa-github" /> </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/peter-chen-ba7847153/"> <i className="fab fa-linkedin" /> </FooterLink>
              <FooterLink href="mailto: cbaile@seas.upenn.edu"> <i className="fas fa-envelope" /> </FooterLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </MobileDiv>
  </>
)

export default MyNavBar
