import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'

import blogStyles from './blog.module.scss'

import Head from '../components/head'
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
                fields{
                  slug
                }
              }
            }
          }
        }
    `)

    
    console.log(data)

    return (
        <Layout>
            <Head title="Blog" />
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                      <li className={blogStyles.post} key={edge.node.frontmatter.title}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                        </Link>
                      </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage