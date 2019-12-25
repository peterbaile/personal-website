/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  let res = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {path: {regex: "/work/"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/pages/templates/workPostTemp.js'),
    })
  })

  res = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {path: {regex: "/blogs/"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/pages/templates/blogPostTemp.js'),
    })
  })
}
