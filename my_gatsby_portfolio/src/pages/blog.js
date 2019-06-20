import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import blogStyles from './blog.module.scss'

const BlogPage = () => {
        // query {
        //     mainBlogArea: allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
        //         edges {
        //             node {
        //                 title
        //                 slug
        //                 publishedDate(formatString:"MMMM Do, YYYY")
        //             }
        //         }
        //     }
        //     blogList: allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
        //         edges {
        //             node {
        //                 title
        //                 slug
        //                 publishedDate(formatString:"M-D-YYYY")
        //             }
        //         }
        //     }
        // }
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        BlogMain: publishedDate(formatString:"MMMM Do, YYYY")
                        BlogList: publishedDate(formatString:"M-D-YYYY")
                    }
                }
            }
        }
    `)


    return (
        <Layout>
            <Head title="Blog"/>
            <div className={blogStyles.section_1}>
            <Container>
                <Row>
                    <Col sm={8}>

                    <h1>Blog</h1>

                    <ol className={blogStyles.posts}>
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return (
                                <li className={blogStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                        <p>{edge.node.BlogMain}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ol>
                    </Col>

                    <Col sm={4}>
                        <ListGroup>
                            {data.allContentfulBlogPost.edges.map((edge) => {
                                return (
                                    <ListGroup.Item>
                                        <Link to={`/blog/${edge.node.slug}`}>
                                            <p>{edge.node.BlogList} | {edge.node.title}  </p>
                                        </Link>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            </div>
        </Layout>
    )
}

export default BlogPage