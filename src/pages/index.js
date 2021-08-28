import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

// import components
import Nav from '../components/Nav'
import SEO from '../components/seo'

const Wrapper = s.div`
  margin-top: 4em;
  margin-bottom: 2em;
  padding: 0em 8em;

  @media screen and (max-width: 768px) {
    padding: 0 2em;
    margin-bottom: 0;
  }
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { path: { eq: "/about" } }) {
        id
        frontmatter {
          path
          image
        }
        html
      }
    }
  `)

  const { markdownRemark: aboutPost } = data
  const { html: content } = aboutPost
  const {
    frontmatter: { image },
  } = aboutPost
  return (
    <>
      <SEO title="About" />
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Nav />

          <Wrapper className="col-md-9 body-content">
            <div className="text-center" style={{ marginBottom: '3em' }}>
              <img
                src={`/images/${image}`}
                className="img-fluid"
                alt="profile"
                height="30%"
                width="30%"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div>
              <p
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: content }}
                style={{ marginBottom: '2em' }}
              />
              {/* <a
                className="btn btn-outline-info"
                href="/files/resume.pdf"
                target="_blank"
              >
                View My Resume &#8594;
              </a> */}
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default AboutPage
