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
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img src={`/images/${image}`} alt={name} />
        </figure>
      </div>

      <div className="media-content">
        <div className="content">
          <h3>
            {name}
          </h3>
          {`Roles: ${description}`}
          <br />
          <time>
            {`Working Period: ${date}`}
          </time>
          <br />
          <br />
          <a className="button" href={path}>
            <span> Read More </span>
            <span className="icon">
              <i className="fas fa-angle-double-right" />
            </span>
          </a>
        </div>
      </div>
    </article>
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
    <div className="columns is-centered">
      <div className="column is-half">
        {
          posts.map(post => <Post {...post.node.childMarkdownRemark.frontmatter} />) //eslint-disable-line
        }
      </div>
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
