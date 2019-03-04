import React from "react"
import { Link } from "gatsby"
import 'bulma/css/bulma.css'
import "fontawesome-free-5.7.2-web/js/all"

import backgroundImage from '../images/index_background.jpg';
import logo from '../images/logo.png'

// import components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <section class="hero is-fullheight" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }}>

      <div class="hero-head has-text-centered" style={{
        marginTop: "2%"
      }}>
        <a href="/">
          <img src={logo} width="500" height="500" />
        </a>
      </div>

      <div class="hero-body" style={{
        marginTop: "4%"
      }}>
        <div class="container has-text-centered">
          <a class="button is-warning is-outlined is-inverted is-size-4 has-text-weight-bold" href="/about"> Click to Explore </a>
        </div>
      </div>

      <div class="hero-foot">
        <div class="tabs is-centered" style={{
          padding: "2%",
        }}>
          <ul>
            <a href="https://github.com/peterbaile" >
              <span class="icon is-small has-text-black">
                <i class="fab fa-github fa-2x" > </i>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/peter-chen-ba7847153/">
              <span class="icon has-text-black">
                <i class="fab fa-linkedin fa-2x"></i>
              </span>
            </a>

            <a>
              <span class="icon has-text-black">
                <i class="fab fa-facebook fa-2x"></i>
              </span>
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IndexPage
