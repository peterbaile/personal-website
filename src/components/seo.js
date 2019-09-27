import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" name="Peter Baile Chen" content="Personal Website for Peter Baile Chen. Currently, a NETS students studying at University of Pennsylvania(UPenn)" />
    <title>
      {!title ? 'Peter Baile Chen' : `Peter Baile Chen | ${title}`}
    </title>
  </Helmet>
)


export default SEO
