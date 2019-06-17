import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import MySkillSetSVG from '../components/mySkillSetSVG'

import indexStyles from './index.module.scss'
// import ScrollingColorBackground from "react-scrolling-color-background"
import { Button } from 'react-bootstrap';

const IndexPage = () => {

    return(
        <Layout>
            <Head title="Home"/>
            <div className={indexStyles.section_1}>
                <h1>
                    <i>Hello</i>
                </h1>  
                <h2>
                    My name is Joe Mulick
                </h2>
                <p>
                    I'm a fullstack Javascript developer originally from Los Angeles<br/>
                    and currently residing in Chico, CA

                    <br/>
                    <br/>

                    <div className={indexStyles.indexTitleContainer}>
                        <h2 className={indexStyles.indexTitle}><span>About Me</span></h2>
                    </div>

                    <br/>

                    <div className={indexStyles.indexTitleContainer}>
                        <h2 className={indexStyles.indexTitle}><span>My Skillset</span></h2>
                    </div>

                    <MySkillSetSVG />

                    <Link to="/contact"><Button>Contact Me</Button></Link>
                </p>
             </div>
        </Layout>
    )
}

export default IndexPage