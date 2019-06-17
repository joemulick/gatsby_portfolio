import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import MySkillSetSVG from '../components/mySkillSetSVG'
import MyProjectsCard1 from '../components/MyProjectsCart1'

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
                    <p className={indexStyles.aboutMeText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                    <br/>

                    <div className={indexStyles.indexTitleContainer}>
                        <h2 className={indexStyles.indexTitle}><span>My Skillset</span></h2>
                    </div>

                    <div className={indexStyles.mySkillSetSVGContainer}>
                        <MySkillSetSVG />
                    </div>

                    <div className={indexStyles.indexTitleContainer}>
                        <h2 className={indexStyles.indexTitle}><span>My Projects</span></h2>
                    </div>
                    
                    <div className={indexStyles.mySkillSetSVGContainer}>
                        <MyProjectsCard1 />                 
                    </div>

                    <Link to="/contact"><Button>Contact Me</Button></Link>
                </p>
             </div>
        </Layout>
    )
}

export default IndexPage