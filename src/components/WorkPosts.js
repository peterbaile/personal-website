import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'
import s from 'styled-components'
import moment from 'moment'

const StyledLink = s(Link)`
  color: black !important;
  text-decoration: none !important;
`

const Post = ({
  image,
  name,
  description,
  path,
  color,
  size,
  idx,
}) => {
  if (idx % 2 === 0) {
    return (
      <div style={{ marginBottom: '1em' }}>
        <StyledLink to={path}>
          <div style={{ backgroundColor: color, borderRadius: '5px' }}>
            <div className="row">
              <div className="col-md-3 text-center" style={{ marginTop: '1em' }}>
                <h5 className="bg-light">{name}</h5>
              </div>
              <div className="col-md-9 text-center">
                <div style={{ padding: '1em 1em 0em 1em' }}>
                  <img className="img-fluid" src={`/images/${image}`} alt={name} width={size} height={size} />
                </div>
              </div>
            </div>
          </div>
        </StyledLink>
      </div>
    )
  }

  return (
    <div style={{ marginBottom: '1em' }}>
      <StyledLink to={path}>
        <div style={{ backgroundColor: color, borderRadius: '5px' }}>
          <div className="row">
            <div className="col-md-9 text-center">
              <div style={{ padding: '1em 1em 0em 1em' }}>
                <img className="img-fluid" src={`/images/${image}`} alt={name} width={size} height={size} />
              </div>
            </div>
            <div className="col-md-3 text-center" style={{ marginTop: '1em' }}>
              <h5 className="bg-light">{name}</h5>
            </div>
          </div>
        </div>
      </StyledLink>
    </div>
  )
}

const WorkPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {path: {regex: "/work/"}}}) {
          edges {
            node {
              frontmatter {
                color
                name
                path
                startDate
                endDate
                description
                image
                size
              }
            }
          }
        }
      }
    `,
  )
  const posts = data.allMarkdownRemark.edges
  const onGoingPosts = posts.filter(post => !post.node.frontmatter.endDate)
  onGoingPosts.sort((a, b) => (moment(a.node.frontmatter.startDate) > moment(b.node.frontmatter.startDate) ? 1 : -1))
  const completedPosts = posts.filter(post => Boolean(post.node.frontmatter.endDate))
  completedPosts.sort((a, b) => (moment(a.node.frontmatter.endDate) < moment(b.node.frontmatter.endDate) ? 1 : -1))
  return (
    <div>
      <h2><u>OnGoing</u></h2>
      {
        onGoingPosts.map((post, idx) => <Post {...post.node.frontmatter} idx={idx} />)
      }
      <h2 style={{ marginTop: '2em' }}><u>Completed</u></h2>
      {
        completedPosts.map((post, idx) => <Post {...post.node.frontmatter} idx={idx} />)
      }
    </div>
  )
}

Post.propTypes = {
  image: '',
  name: '',
  description: '',
  path: '',
  color: '',
}

Post.defaultProps = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  color: PropTypes.string,
}

export default WorkPosts
