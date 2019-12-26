import React from 'react'
import { graphql, Link } from 'gatsby'
import { Sticky, StickyContainer } from 'react-sticky'

import Nav from '../../components/Nav'

const WorkPostTemp = ({ data }) => {
  const { markdownRemark: post } = data

  if (post == null) {
    return null
  }

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />
        <div className="col-md-9">
          <div style={{ marginTop: '3em' }}>
            <StickyContainer>
              <Sticky>
                {({ style }) => (
                  <div style={{ ...style, backgroundColor: 'white', padding: '1em 0em 1.5em 0em', fontSize: '24px' }}>
                    <Link to="/blogs" className="no-color no-dec">
                      <i className="fas fa-angle-double-left" />
                    </Link>
                    &nbsp;&nbsp;{post.frontmatter.title}
                  </div>
                )}
              </Sticky>
              <p className="body-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </StickyContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
query fetchSingleBlog($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      frontmatter {
        path
        name
        description
        image
        title
      }
      html
    }
  }
`

export default WorkPostTemp
