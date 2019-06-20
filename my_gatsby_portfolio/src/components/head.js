import React from 'react'

import { Helmet } from 'react-helmet'
import { useStaticQuery,graphql } from 'gatsby'

const Head = ({title}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet 
        bodyAttributes={{style: 'background-color : #fff6dd; font-family: "Source Sans Pro", sans-serif;'}} 
        title={`${title} | ${data.site.siteMetadata.title}`} 
        />
    )
}

export default Head