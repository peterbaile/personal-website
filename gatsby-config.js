module.exports = {
  siteMetadata: {
    title: 'Personal Website',
    description: 'Personal Website for Peter Baile Chen',
    author: 'Peter Chen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'aboutPost',
        path: `${__dirname}/src/pages/aboutPosts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'workPosts',
        path: `${__dirname}/src/pages/projectPosts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Peter Baile Chen',
        short_name: 'Peter Chen',
        description: 'Personal Website of Peter Baile Chen',
        lang: 'en',
        start_url: '/',
        icon: 'static/images/icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
