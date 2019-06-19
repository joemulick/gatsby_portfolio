import React from "react"
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

import aboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className={aboutStyles.section_1}>
                <h1>About Page Title</h1>
                <p>About page bio</p>
                <p>Additional info here <Link to="/contact">Contact Me</Link></p>
            </div>
        </Layout>
    )
}

export default AboutPage