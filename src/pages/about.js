import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// import components
import Nav from '../components/Nav';
import SEO from '../components/seo';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
  query {
      markdownRemark(frontmatter:{path:{eq:"/about"}}){
        id
        frontmatter{
          path
          image
        }
        html
      }
    }
  `)

  const { markdownRemark: aboutPost } = data
  const { html: content } = aboutPost
  const { frontmatter: { image } } = aboutPost
  return (
    <>
      <SEO title="About" />
      <Nav>
        <div className="container" style={{ marginTop: '10em' }}>
          <div className="row" style={{ marginBottom: '2em' }}>
            <div className="col-md-5 text-center">
              <img src={`/images/${image}`} className="img-fluid" alt="profile" height="50%" width="50%" />
            </div>
            <div className="col-md-7">
              <p dangerouslySetInnerHTML={{ __html: content }} />
              <p>
                <blockquote className="blockquote"> Stay Hungry, Stay Foolish </blockquote>
              </p>
              <a className="btn btn-outline-info" href="/files/resume.pdf" target="_blank"> View Resume </a>
            </div>
          </div>
        </div>
      </Nav>
    </>
  )
}

export default AboutPage
