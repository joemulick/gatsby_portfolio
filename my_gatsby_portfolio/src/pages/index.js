import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

import {Container, Row, Col} from 'react-bootstrap'

import MySkillSetSVG from '../components/mySkillSetSVG'
import MyProjectsCard1 from '../components/myProjectsCart1'
import ReachMe from '../components/reachMe'

import indexStyles from './index.module.scss'


const IndexPage = () => {

    return(
        <Layout>
            <Head title="Home"/>
            <div className={indexStyles.section_1}>
                <h1>
                    <i>Hello</i> 👋
                </h1>  
                <h2 style={{margin: '7vh 0'}}>
                    My name is Joe Mulick
                </h2>
                <p style={{marginBottom: '9vh'}}>
                    I'm a fullstack Javascript developer originally from Los Angeles<br/>
                    and currently residing in Chico, CA
                </p>

                    <Container style={{paddingBottom: '40px', textAlign: 'center'}}>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="6">
                                <img style={{maxWidth:'430px'}} height="auto" width="100%" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035229/mern_n2shda.png" alt="mern-stack" />
                            </Col>
                            <Col xs="12" sm="12" md="12" lg="6">
                                <img style={{maxWidth:'430px'}} height="auto" width="100%" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510361407/LAsmlgreyone_oswasr.png" alt="los-angeles" />
                            </Col>
                        </Row>
                    </Container>
                    <div className={indexStyles.indexTitleContainer}>
                        <h2 className={indexStyles.indexTitle}><span>About Me</span></h2>
                    </div>

                    <p className={indexStyles.aboutMeText}>I am a full stack web developer and entrepreneur originally from Los Angeles, California. I am passionate about web development and enjoy discovering new technologies which I can use to develop websites and useful web applications in my spare time. I am driven and always looking to tackle the next challenge.
                    <br/>
                    <br/>
                    I currently work at build.com as the lead technical email developer. Build.com is an innovative e-commerce company based in Chico, CA. 
                    <br/>
                    <br/>
                    I attended UCLA extension coding bootcamp which was a tremendous experience where I learned to create and impliment full stack web applications using the most relevent web technologies. See my skill set below, or check out my <a href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">github.</a>
                    </p>

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

                    <div className={indexStyles.indexTitleContainer}>
                        <h2 className={indexStyles.indexTitle}><span>Reach Me</span></h2>
                    </div>

                    <div>
                        <ReachMe />
                    </div>
             </div>
        </Layout>
    )
}

export default IndexPage