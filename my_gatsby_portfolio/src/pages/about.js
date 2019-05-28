import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page Title</h1>
            <p>About page bio</p>
            <p>Additional info here <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage