/* global graphql */
import React from 'react'

// import components
import Nav from '../components/Nav';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const aboutPost = data.markdownRemark;
  return (
    <div>
      <SEO title="About" />
      <Nav>

      <div
        className="content"
        style={{
          paddingTop: "60px",
          margin: "2%"
        }}
      >
        <h1 className="has-text-centered"> Something Interesting~ 😀 </h1>

        
        <div className="row">
          <div className="col-1-3">
            <img src="/images/profile_picture.jpg" alt="profile" />
          </div>
          <div className="col-1-3">
            <p>
              Hi, I am Peter. And I'm a freshman studying Computer Science at the University of Pennsylvania.
              <br />
              <br />
              I was born in Changzhou, China and lived in Shanghai for 14 years before my family moved to Hong Kong.
              <br />
              <br />
              I think as people we have passion for something, no matter small or large. And for me, that passion is to be a great entrepreneur.
              <br />
              <br />
              <blockquote> Stay Hungry, Stay Foolish </blockquote>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-2-3">
            <p dangerouslySetInnerHTML={{ __html: aboutPost.html }} />
          </div>
        </div>

        <div className="row">
          <a className="button is-outlined" href="/files/resume.pdf" target="_blank"> View Resume </a>
        </div>
      </div>
      </Nav>
    </div>
  )
}

export const postQuery = graphql`
query {
    markdownRemark(frontmatter:{path:{eq:"/about"}}){
      id
      frontmatter{
        path
        name
      }
      html
    }
  }
`

export default AboutPage