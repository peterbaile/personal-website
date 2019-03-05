import React from "react"

const Posts = ({ data }) => {
    const posts = data.allFile.edges;
    return posts.map(post => {
        return (
            <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src={post.node.childMarkdownRemark.frontmatter.image} />
                        </figure>
                    </div>

                    <div class="media-content">
                        <div class="content">
                            <h3> {post.node.childMarkdownRemark.frontmatter.name} </h3>
                            Roles: {post.node.childMarkdownRemark.frontmatter.description}
                            <br />
                            <time> Working Period: {post.node.childMarkdownRemark.frontmatter.date}</time>
                            <br />
                            <br />
                            <a class="button" href={post.node.childMarkdownRemark.frontmatter.path}>
                                <span> Read More </span>
                                <span class="icon">
                                    <i class="fas fa-angle-double-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        )
    })
}

const WorkPosts = ({ data }) => {
    return (
        <div class="columns is-centered">
            <div class="column is-half">
                <Posts data={data} />
            </div>
        </div>
    )
}

export default WorkPosts;