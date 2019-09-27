import React from 'react'
import { Link } from 'gatsby'
import 'bulma/css/bulma.css'

import backgroundImage from '../images/background_2.jpg';
import logo from '../images/logo.png'

// import components
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <section class="hero is-fullheight" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }}>

      <SEO />

      <div class="hero-head has-text-centered" style={{
        marginTop: "2%"
      }}>
        <a href="/">
          <img src={logo} width="500" height="500" />
        </a>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <Link to="/about/">
            <a class="button is-primary is-inverted is-outlined is-size-4 has-text-weight-bold"> Explore the unusual mind of an engineer</a>
          </Link>
        </div>
      </div>

      <div class="hero-foot">
        <div class="content has-text-centered">
          <h5 class="has-text-white"> Picture shot at Harvey Cedars </h5>
        </div>
        <div class="tabs is-centered" style={{
          padding: "2%",
        }}>
          <ul>
            <a href="https://github.com/peterbaile" >
              <span class="icon has-text-white">
                <i class="fab fa-github fa-2x" aria-hidden="true"> </i>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/peter-chen-ba7847153/">
              <span class="icon has-text-white">
                <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
              </span>
            </a>

            <a>
              <span class="icon has-text-white">
                <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
              </span>
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IndexPage
