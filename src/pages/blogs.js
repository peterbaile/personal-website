import React from 'react'

// import components
import Nav from '../components/Nav'
import BlogPosts from '../components/BlogPosts'
import SEO from '../components/seo'

const BlogPage = () => (
  <>
    <SEO title="Blogs" />

    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <div className="col-md-9" style={{ marginTop: '5em' }}>
          <div className="container">
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BlogPage
