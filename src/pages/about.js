import React from 'react'

// import components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AboutPage = ({ data }) => {
    const aboutPost = data.markdownRemark;
    return (
        <div>
            <Nav />
            <hr />

            <div class="content" style={{
                margin: "2%"
            }}>
                <h1 class="has-text-centered"> Something Interesting~ 😀 </h1>
                <br />

                <div class="columns is-centered is-mobile" >
                    <div class="column is-one-third">
                        <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53270784_2291663964445124_5704761526041182208_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=e911deec801569a4ac710010a905d8bd&oe=5CDE4AE7" />
                    </div>
                    <div class="column is-one-third">
                        <p >
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

                <div class="columns is-centered is-mobile" >
                    <div class="column is-two-thirds">
                        <p dangerouslySetInnerHTML={{ __html: aboutPost.html }}></p>
                        <a class="button is-outlined"> View Resume </a>
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