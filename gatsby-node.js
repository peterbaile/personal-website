/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const workPostTemplate = path.resolve('src/pages/templates/workPostTemp.js');

  return graphql(`
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allFile.edges.forEach(({ node }) => {
      createPage({
        path: node.childMarkdownRemark.frontmatter.path,
        component: workPostTemplate,
      })
    })
  })
}
