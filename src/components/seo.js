import React from "react"
import { Helmet } from "react-helmet"

class SEO extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Peter Chen </title>
                </Helmet>
            </div>
        )
    }
}

export default SEO;