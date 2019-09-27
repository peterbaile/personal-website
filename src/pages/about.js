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
        <Nav />
        <hr />

        <div
          className="content"
          style={{
            margin: "2%"
          }}
        >
          <h1 className="has-text-centered"> Something Interesting~ 😀 </h1>
          <br />

          <div className="columns is-centered is-mobile" >
            <div className="column is-one-third">
                <img src="/images/profile_picture.jpg" />
            </div>
            <div className="column is-one-third">
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

            <div className="columns is-centered is-mobile" >
                <div className="column is-two-thirds">
                    <p dangerouslySetInnerHTML={{ __html: aboutPost.html }}></p>
                    <a className="button is-outlined" href="https://drive.google.com/file/d/1_-3k_SiyRiFeJPIi5x_mZN4aBXbKbHGM/view?usp=sharing" target="_blank"> View Resume </a>
                </div>
            </div>
        </div>
    </div>
    )

}

export const postQuery = graphql`
query fetchAboutPost{
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

export default AboutPage;