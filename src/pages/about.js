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
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Nav />

          <div className="col-md-7" style={{ marginTop: '5em' }}>
            <div className="text-center" style={{ marginBottom: '3em' }}>
              <img src={`/images/${image}`} className="img-fluid" alt="profile" height="30%" width="30%" style={{ borderRadius: '50%' }} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: content }} />
            <p>
              <blockquote className="blockquote"> Stay Hungry, Stay Foolish </blockquote>
            </p>
            <a className="btn btn-outline-info" href="/files/resume.pdf" target="_blank"> View Resume </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
