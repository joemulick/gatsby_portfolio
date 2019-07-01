import React from 'react'

import { Helmet } from 'react-helmet'
import { useStaticQuery,graphql } from 'gatsby'

import headStyles from "./head.module.scss"

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
        className={headStyles.bodyStyle}  
        title={`${title} | ${data.site.siteMetadata.title}`} 
        />
    )
}

export default Head