import React from "react"
import 'bulma/css/bulma.css'

// import components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WorkPosts from '../components/WorkPosts';
import SEO from '../components/seo';

const WorkPage = ({ data }) => {
  return (
    <div>
      <SEO title="Work & Projects"/>
      <Nav />
      <hr />

      <div class="content" style={{
        margin: "2%"
      }}>
        <h1 class="has-text-centered"> Explore More What I'm Involved~ 😃 </h1>
        <br />
        <WorkPosts data={data} />
      </div>

      <Footer />
    </div>
  )
}

export const allWorkQuery = graphql`
{
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
`

export default WorkPage;
