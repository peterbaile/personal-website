import React from 'react';
import Nav from '../../components/Nav';

const WorkPostTemp = ({ data }) => {
  const post = data.markdownRemark;

  if (post == null) {
    return null;
  }

  return (
    <>
      <Nav />
      <hr />

      <div style={{
        margin: "2%"
      }}>
        <a class="button" href="/work">
          <span class="icon">
            <i class="fas fa-angle-double-left"></i>
          </span>
          <span> View other work experiences </span>
        </a>
      </div>

      <div class="columns is-centered" >
        <div class="column is-half">
          <div class="content">
            <h1 class="has-text-centered"> {post.frontmatter.name} </h1>
            <br />
            <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
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

export default WorkPostTemp;