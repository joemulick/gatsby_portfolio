import React from "react"

import Head from '../components/head'
import Layout from '../components/layout'

import contactStyles from './contact.module.scss'


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className={contactStyles.section_1}>
            <h1>Contact Page Title</h1>
            <p>Contact page details.</p>
            </div>
        </Layout>
    )
}

export default ContactPage