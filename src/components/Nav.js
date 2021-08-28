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

  margin: 1em 0;
`

const LaptopDiv = s.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuLink = s(Link)`
  font-size: 1.1em;

  p {
    margin-bottom: 0.6rem;
  }
`

const Line = s.div`
  border-bottom: 1px solid #000;
  width: 70%;
  margin: auto;
`

const MyNavBar = () => (
  <>
    <LaptopDiv
      className="col-md-3"
      style={{ paddingLeft: '3em', marginTop: '4em' }}
    >
      <div className="position-fixed">
        <h2 style={{ marginBottom: '0.5em' }}>Peter Baile Chen</h2>
        <Line />
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <MenuLink to="/" className="no-color">
            <p> ABOUT </p>
          </MenuLink>
          <MenuLink to="/research" className="no-color">
            <p> RESEARCH </p>
          </MenuLink>
          <MenuLink to="/work" className="no-color">
            <p> WORK </p>
          </MenuLink>
          {/* <MenuLink to="/blogs" className="no-color">
            <p>BLOG</p>
          </MenuLink> */}
        </div>
        <div
          style={{
            bottom: '30px',
            left: '35px',
            position: 'fixed',
            padding: '0',
            margin: '0',
            fontSize: '0.7em',
          }}
        >
          <FooterLink href="https://github.com/peterbaile" target="_blank">
            <i className="fab fa-github" />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/peter-bc/"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </FooterLink>
          <FooterLink href="mailto:cbaile@seas.upenn.edu">
            <i className="fas fa-envelope" />
          </FooterLink>
          <br />
          <br />
          &copy; 2021 Peter Baile Chen
          <br />
          Last update: 8/28/2021
        </div>
        {/* <div> Copyright 2021 Peter Baile Chen. Last update: 8/28/2021. </div> */}
      </div>
    </LaptopDiv>
    <MobileDiv className="col-md-3">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Peter Baile Chen</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ border: 'None' }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/research">Research</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link>
              <FooterLink href="https://github.com/peterbaile">
                <i className="fab fa-github" />
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/peter-chen-ba7847153/">
                <i className="fab fa-linkedin" />
              </FooterLink>
              <FooterLink href="mailto:cbaile@seas.upenn.edu">
                <i className="fas fa-envelope" />
              </FooterLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </MobileDiv>
  </>
)

export default MyNavBar
