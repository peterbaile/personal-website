import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'

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

const Nav = () => (
  <div className="col-md-5" style={{ paddingLeft: '5em' }}>
    <div className="position-fixed text-center">
      <p className="h3" style={{ marginBottom: '1em' }}> Peter Baile Chen </p>
      <StyledLink to="/"> Home </StyledLink>
      <br />
      <StyledLink to="/about"> About Me </StyledLink>
      <br />
      <StyledLink to="/work"> Work </StyledLink>
      <div style={{ marginTop: '1em' }}>
        <FooterLink href="https://www.facebook.com/100008046289134" target="_blank">
          <i className="fab fa-facebook-square" />
        </FooterLink>
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
  </div>
)

export default Nav
