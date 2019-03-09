import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title> {!title ? "Peter Chen" : `Peter Chen | ${title}`} </title>
        </Helmet>

    )
}


export default SEO;