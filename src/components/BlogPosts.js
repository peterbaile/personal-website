import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'
import s from 'styled-components'

const StyledLink = s(Link)`
  color: black !important;
  text-decoration: none !important;
`

const Line = s.div`
  width: 100%;
  display: block;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  ${({ margin }) => margin && `margin: ${margin};`}
`

const Post = ({
  path,
  title,
  created,
}) => (
  <div style={{ marginBottom: '1em' }}>
    <StyledLink to={path}>
      <h3> {title} </h3>
      <p className="text-muted"> {created} </p>
    </StyledLink>
    <Line />
  </div>
)

const BlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {path: {regex: "/blogs/"}}}) {
          edges {
            node {
              frontmatter {
                path
                title
                created
              }
            }
          }
        }
      }
    `,
  )
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      {
        posts.map((post, idx) => <Post {...post.node.frontmatter} idx={idx} />)
      }
    </div>
  )
}

Post.propTypes = {
  image: '',
  name: '',
  description: '',
  date: '',
  path: '',
  color: '',
}

Post.defaultProps = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  color: PropTypes.string,
}

export default BlogPosts
