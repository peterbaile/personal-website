import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Peter Baile Chen" />
      <meta property="og:url" content="https://peterchen.herokuapp.com/" />
      <meta property="twitter:url" contet="https://peterchen.herokuapp.com/" />
      <meta name="author" content="Peter Baile Chen" />
      <meta name="description" content="Personal Website for Peter Baile Chen. Currently, a NETS students studying at University of Pennsylvania (UPenn)" />
      <meta name="keywords" content="peter, peter baile, peter baile chen, chen, baile, upenn, university of pennslyvania, penn, nets, penn labs, labs, 197, cis 197, cis-197, penn basics, basics, web, web developer, developer" />
      <title>
        {!title ? 'Peter Baile Chen' : `Peter Baile Chen | ${title}`}
      </title>
    </Helmet>
  )
}


export default SEO
