import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>Page Not Found</h1>
            <p>You have reached this page in ERROR</p>
            <Link to="/">Head home</Link>
        </Layout>
    )
}

export default NotFound