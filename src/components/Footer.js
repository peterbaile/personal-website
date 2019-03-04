import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`

const Footer = () => (
    <div class="content has-text-centered" style={{
        padding: "2%",
        position: "fixed",
        bottom: "0px"
    }}>
        <span class="icon has-text-info" >
            <a href="https://github.com/peterbaile"> <i class="fab fa-github fa-2x" ></i> </a>
            <a href="https://www.linkedin.com/in/peter-chen-ba7847153/"> <i class="fab fa-linkedin fa-2x"></i> </a>
        </span>
    </div>
)

export default Footer;