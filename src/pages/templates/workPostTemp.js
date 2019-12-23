import React, { useState } from 'react'
import { graphql } from 'gatsby'
import handleViewport from 'react-in-viewport'

import Nav from '../../components/Nav'

const Block = ({ inViewport, forwardedRef, post }) => (
  <div ref={forwardedRef}>
    <a type="button" className="btn btn-labeled btn-info" href="/work">
      <span className="btn-label">
        <i className="fas fa-angle-double-left" />
      </span>
      &nbsp;View other work experiences
    </a>
    <h3 style={{ marginTop: '1em' }}>
      {post.frontmatter.name}
    </h3>
  </div>
)

const ViewportBlock = handleViewport(Block)

const WorkPostTemp = ({ data }) => {
  const [name, setName] = useState('')
  const { markdownRemark: post } = data

  if (post == null) {
    return null
  }

  return (
    <>
      <Nav name={name} />

      <div style={{ marginTop: '5em', padding: '0em 1em' }}>
        <ViewportBlock post={post} onEnterViewport={() => setName('')} onLeaveViewport={() => setName(post.frontmatter.name)} />
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <p dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </>
  )
}

export const postQuery = graphql`
query fetchSingleWork($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      id
      frontmatter {
        path
        date
        name
        description
        image
      }
      html
    }
  }
`

export default WorkPostTemp
