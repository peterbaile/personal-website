import React from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'

// import components
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO />

    <div className="text-center" style={{ marginTop: '1em' }}>
      <h1 className="display-4">
        Peter Baile Chen
      </h1>
    </div>

    <Carousel style={{ marginTop: '2em', marginBottom: '2em' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/background_1.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/background_2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Picture shot at Harvey Cedars</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/background_3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Picture shot at Harvey Cedars</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="text-center">
      <Link to="/about/">
        <button type="button" className="btn btn-outline-success">Explore the unusual mind of an engineer</button>
      </Link>
    </div>
  </>
)

export default IndexPage
