import React from "react"

import Head from '../components/head'
import Layout from '../components/layout'

import ReachMe from '../components/reachMe'

import contactStyles from './contact.module.scss'


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className={contactStyles.section_1}>
            <h1>Contact Me:</h1>
            <ReachMe />     
            </div>
        </Layout>
    )
}

export default ContactPage