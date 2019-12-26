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
    <LaptopDiv className="col-md-3" style={{ paddingLeft: '3em', marginTop: '2em' }}>
      <div className="position-fixed text-center">
        <Link to="/" className="no-color no-dec">
          <p className="h3" style={{ marginBottom: '1em' }}> Peter Baile Chen </p>
        </Link>
        <Link to="/" className="no-color"> Gallery </Link>
        <br />
        <Link to="/about" className="no-color">About</Link>
        <br />
        <Link to="/work" className="no-color">Work</Link>
        <br />
        <Link to="/blogs" className="no-color">Blogs</Link>
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
        <Navbar.Brand href="/">Peter Baile Chen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
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
