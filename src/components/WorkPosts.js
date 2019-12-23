import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const Post = ({
  image,
  name,
  description,
  date,
  path,
}) => (
  <div className="d-flex justify-content-center" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ width: '45%' }}>
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img width="50%" height="50%" className="img-fluid" src={`/images/${image}`} alt={name} />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card-body" style={{ paddingLeft: '3em' }}>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{`Roles: ${description}`}</p>
            <p className="card-text">{`Working Period: ${date}`}</p>
            <a type="button" href={path} className="btn btn-labeled btn-success">
              Read More&nbsp;
              <span className="btn-label">
                <i className="fas fa-angle-double-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

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
                  name
                  path
                  date
                  description
                  image
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
    <div style={{ marginTop: '10em' }}>
      {
        posts.map(post => <Post {...post.node.childMarkdownRemark.frontmatter} />)
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
}

Post.defaultProps = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
}

export default WorkPosts
