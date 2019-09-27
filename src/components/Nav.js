import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'

import logo from '../images/logo.png'

const Row = s.div`
  background-color: #EFEFEF;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
`
const Item = s.p`
  display: block
  padding: 14px 16px;
  color: black;
  :hover {
    color: #2a414d
  }
`

const Footer = s.div`
  position: fixed;
  padding-left: 1em;
  padding-bottom: 1em;
  bottom: 0;
  text-align: center;
  @media only screen and (max-width: 800px) {
    bottom: 100px;
    top: 1em;
  }
`
const FooterLink = s.a`
  display: inline-block;
  margin-right: 1em;
  color: black;
  font-size: 20px;
  :hover {
    color: #2a414d
  }
`

const Nav = ({ children }) => (
  <>
    <Row>
            {/* <Link to="/">
                <img src={logo} width="100" height="100" />
            </Link> */}

      <Link to="/about"> <Item> About me </Item> </Link>
      <Link to="/work"> <Item> Work Experience </Item> </Link>
    </Row>
    {children}
    <Footer>
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
    </Footer>
  </>
)

export default Nav
