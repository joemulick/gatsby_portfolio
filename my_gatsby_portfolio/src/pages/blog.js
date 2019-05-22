import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'


const BlogPage = () => {

    const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        }
    `)

    console.log(data)

    return (
        <Layout>

            <ol>
                <li>
                    <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h2>
                    <p>{data.allMarkdownRemark.edges[0].node.frontmatter.date}</p>
                </li>
                <li>
                    <h2>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</h2>
                    <p>{data.allMarkdownRemark.edges[1].node.frontmatter.date}</p>
                </li>
            </ol>
        </Layout>
    )
}

export default BlogPage