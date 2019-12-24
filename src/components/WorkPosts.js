import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'
import s from 'styled-components'

const StyledLink = s(Link)`
  color: black !important;
  text-decoration: none !important;
`

const Post = ({
  image,
  name,
  description,
  date,
  path,
  color,
  size,
  idx,
}) => {
  if (idx % 2 === 0) {
    return (
      <div className="d-flex justify-content-center" style={{ marginBottom: '1em' }}>
        <StyledLink to={path}>
          <div style={{ backgroundColor: color, borderRadius: '5px' }}>
            <div className="row">
              <div className="col-md-3" style={{ paddingTop: '1em' }}>
                <h5 className="card-title bg-light" style={{ paddingLeft: '0.5em' }}>{name}</h5>
              </div>
              <div className="col-md-9">
                <div className="text-center" style={{ padding: '1em' }}>
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
    <div className="d-flex justify-content-center" style={{ marginBottom: '1em' }}>
      <StyledLink to={path}>
        <div style={{ backgroundColor: color, borderRadius: '5px' }}>
          <div className="row">
            <div className="col-md-9">
              <div className="text-center" style={{ padding: '1em' }}>
                <img className="img-fluid" src={`/images/${image}`} alt={name} width={size} height={size} />
              </div>
            </div>
            <div className="col-md-3" style={{ paddingTop: '1em' }}>
              <h5 className="card-title bg-light" style={{ paddingLeft: '0.5em' }}>{name}</h5>
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
        allFile(filter:{sourceInstanceName:{eq:"workPosts"}}){
          edges{
            node{
              sourceInstanceName
              childMarkdownRemark{
                frontmatter{
                  color
                  name
                  path
                  date
                  description
                  image
                  size
                }
                html
              }
            }
          }
        }
      }
    `,
  )
  const posts = data.allFile.edges
  return (
    <div>
      {
        posts.map((post, idx) => <Post {...post.node.childMarkdownRemark.frontmatter} idx={idx} />)
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

export default WorkPosts
