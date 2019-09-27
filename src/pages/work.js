import React from 'react'
import 'bulma/css/bulma.css'

// import components
import Nav from '../components/Nav';
import WorkPosts from '../components/WorkPosts';
import SEO from '../components/seo';

const WorkPage = () => (
  <div>
    <SEO title="Work & Projects" />
    <Nav>

    <div
      className="content"
      style={{
        marginTop: "5em",
      }}
    >
      <h1 className="has-text-centered"> Explore More What I'm Involved~ 😃 </h1>
      <br />
      <WorkPosts />
    </div>
    </Nav>
  </div>
)

export default WorkPage
