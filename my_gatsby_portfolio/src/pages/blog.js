import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import blogStyles from './blog.module.scss'

const BlogPage = () => {

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
                        <ListGroup className={blogStyles.listContainer}>
                            {data.allContentfulBlogPost.edges.map((edge) => {
                                return (
                                    <Link className={blogStyles.blogURLstyle} to={`/blog/${edge.node.slug}`}>
                                        <ListGroup.Item className={blogStyles.listGroupStyle}>
                                                <p className={blogStyles.listTextStyle}>
                                                    {edge.node.title}<br />
                                                    <div style={{textAlign:'right'}}>{edge.node.BlogList}</div>
                                                </p>   
                                        </ListGroup.Item>
                                    </Link>
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