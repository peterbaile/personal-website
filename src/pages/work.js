import React from "react"
import 'bulma/css/bulma.css'
import "fontawesome-free-5.7.2-web/js/all"

// import components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WorkPosts from '../components/WorkPosts';

const WorkPage = ({data}) => {
    return (
        <div>
            <Nav />
            <hr />
            <WorkPosts data={data}/>
            <Footer />
        </div>
    )
}

export const allWorkQuery = graphql`
query fetchAllWork{
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            date
            name
            description
            image
          }
        }
      }
    }
  }
`

export default WorkPage;
