import React from 'react'

// import components
import Nav from '../components/Nav';
import WorkPosts from '../components/WorkPosts';
import SEO from '../components/seo';

const WorkPage = () => (
  <div>
    <SEO title="Work & Projects" />
    <Nav>
      <WorkPosts />
    </Nav>
  </div>
)

export default WorkPage
