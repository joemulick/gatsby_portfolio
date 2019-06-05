import React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'


export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq:$slug}){
            title
            publishedDate(formatString: "MMMM Do, YYYY")
        }
    }   
`

const Blog = (props) => {
    return (
        <Layout>
            {/* <Head title={props.data.markdownRemark.frontmatter.title} />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>               
        </Layout>
    )
}

export default Blog