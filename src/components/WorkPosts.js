import React from "react"
import { Link } from 'gatsby'

const EvenPosts = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return posts.map((post, index) => {
        if (index % 2 === 0) {
            return (
                <div class="card" style={{
                    marginBottom: "5%"
                }}>
                    <a href={post.node.frontmatter.path}>
                        <div class="card-image">
                            <img src={post.node.frontmatter.image} />
                        </div>
                    </a>
                    <hr />

                    <div class="content" style={{
                        padding: "3%"
                    }}>
                        <h3> {post.node.frontmatter.name} </h3>
                        {post.node.frontmatter.description}
                        <br />
                        <time datetime="2016-1-1">{post.node.frontmatter.date}</time>
                    </div>
                </div>
            )
        }
    })
}

const OddPosts = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return posts.map((post, index) => {
        if (index % 2 !== 0) {
            return (
                <div class="card" style={{
                    marginBottom: "5%"
                }}>
                    <a href={post.node.frontmatter.path}>
                        <div class="card-image">
                            <img src={post.node.frontmatter.image} />
                        </div>
                    </a>
                    <hr />

                    <div class="content" style={{
                        padding: "3%"
                    }}>
                        <h3> {post.node.frontmatter.name} </h3>
                        {post.node.frontmatter.description}
                        <br />
                        <time datetime="2016-1-1">{post.node.frontmatter.date}</time>
                    </div>
                </div >
            )
        }
    })
}

const WorkPosts = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    for (let i = 0; i < posts.length; i += 2) {
        return (
            <div class="columns is-centered">
                <div class="column is-one-third">
                    <EvenPosts data={data} />
                </div>

                <div class="column is-one-third">
                    <OddPosts data={data} />
                </div>

            </div>
        )
    }
}

export default WorkPosts;