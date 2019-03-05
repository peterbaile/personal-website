import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

const Nav = () => (
    <div>
        <nav class="navbar is-size-5"  aria-label="main navigation" >
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src={logo} width="100" height="100" />
                </a>
            </div>

            <div  class="navbar-menu">
                <div class="navbar-start">
                    <a href="/about" class="navbar-item"> About me </a>
                    <a href="/work" class="navbar-item"> Work Experience </a>
                    <a href="/contact" class="navbar-item"> Contacts </a>
                </div>
            </div>
        </nav>
    </div>
)

export default Nav;