import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import { Button } from 'react-bootstrap';

const IndexPage = () => {

    return(
        <Layout>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>Joe</h2>
            <p>Need a developer? <Link to="/contact"><Button>Contact Me</Button></Link></p>
        </Layout>
    )
}

export default IndexPage