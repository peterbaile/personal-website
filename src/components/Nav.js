import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'

import logo from '../images/logo.png'

const Row = s.div`
  background-color: #EFEFEF;
  display: flex;
  flex-direction: row;
  position: fixed;
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
const Nav = ({ children }) => (
  <>
    <Row>
            {/* <Link to="/">
                <img src={logo} width="100" height="100" />
            </Link> */}

      <Link to="/about"> <Item> About me </Item> </Link>
      <Link to="/work"> <Item> Work Experience </Item> </Link>
      <Link to="/contact"> <Item> Contacts </Item> </Link>
    </Row>
    {children}
    <div
      className="content has-text-centered"
      style={{
        paddingLeft: '2em',
        paddingBottom: '2em',
        position: 'fixed',
        bottom: '0px',
      }}
    >
        <span class="icon has-text-info">
            <a href="https://github.com/peterbaile"> <i class="fab fa-github fa-2x" ></i> </a>
            <a href="https://www.linkedin.com/in/peter-chen-ba7847153/"> <i class="fab fa-linkedin fa-2x"></i> </a>
        </span>
    </div>
  </>
)

export default Nav