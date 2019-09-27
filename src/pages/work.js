import React from 'react'
import 'bulma/css/bulma.css'

// import components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WorkPosts from '../components/WorkPosts';
import SEO from '../components/seo';

const WorkPage = () => (
  <div>
    <SEO title="Work & Projects" />
    <Nav />
    <hr />

    <div
      className="content"
      style={{
        margin: '2%',
      }}
    >
      <h1 className="has-text-centered"> Explore More What I'm Involved~ 😃 </h1>
      <br />
      <WorkPosts />
    </div>

    <Footer />
  </div>
)

export default WorkPage
