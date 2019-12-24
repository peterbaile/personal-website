import React from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'

// import components
import SEO from '../components/seo'
import Nav from '../components/Nav'

const IndexPage = () => (
  <>
    <SEO />

    <div className="container-fluid h-100">
      <div className="row">
        <Nav />

        <div className="col-md-7">
          <Carousel style={{ marginTop: '3.5em' }}>
            <Carousel.Item>
              <img
                className="img-fluid"
                src="/images/background_1.jpg"
                alt="Penn's Landing"
              />

              <Carousel.Caption>
                <p>Penn&apos;s Landing</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="img-fluid"
                src="/images/background_2.jpg"
                alt="Golden Gate Bridge"
              />

              <Carousel.Caption>
                <p>Golden Gate Bridge</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="img-fluid"
                src="/images/background_3.jpg"
                alt="Harvey Cedars"
              />

              <Carousel.Caption>
                <p>Harvey Cedars</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
