import React from 'react'
import { graphql, Link } from 'gatsby'
import { Sticky, StickyContainer } from 'react-sticky'
import s from 'styled-components'

import Nav from '../../components/Nav'

const StyledLink = s(Link)`
  color: black !important;
  text-decoration: none !important;
`

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
                    <StyledLink to="/work">
                      <i className="fas fa-angle-double-left" />
                    </StyledLink>
                    &nbsp;&nbsp;{post.frontmatter.name}
                  </div>
                )}
              </Sticky>
              <p dangerouslySetInnerHTML={{ __html: post.html }} />
            </StickyContainer>
          </div>
        </div>
      </div>
    </div>
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
