import React from 'react';
import Nav from '../../components/Nav';

const WorkPostTemp = ({data}) => {
    const post = data.markdownRemark;
    return (
        <>
        <Nav/>
        <hr/>
        <div>
            <a href="/work"> View other work experiences </a>
            <h1> {post.frontmatter.name} </h1>
        </div>
        <br/>
        <br/>
        <div>
            <p> {post.excerpt} </p>
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
      excerpt
    }
  }
`

export default WorkPostTemp;