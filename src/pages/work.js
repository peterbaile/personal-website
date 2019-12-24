import React from 'react'

// import components
import Nav from '../components/Nav';
import WorkPosts from '../components/WorkPosts';
import SEO from '../components/seo';

const WorkPage = () => (
  <>
    <SEO title="Work & Projects" />

    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <div className="col-md-7" style={{ marginTop: '5em' }}>
          <div className="container">
            <WorkPosts />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default WorkPage
