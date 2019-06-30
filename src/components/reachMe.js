import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import reachMeStyles from './reachMe.module.scss'

const ReachMe = (props) => {

    return (

    <Container>
        <Row>
            <Col className={reachMeStyles.centerReachMeItem}>
                <a href="mailto:joemulick@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className={reachMeStyles.reachMeItem} alt="Email Me" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-email_rdpr8q.png" />
               </a>
            </Col>
            <Col className={reachMeStyles.centerReachMeItem}>
                <a href="https://www.linkedin.com/in/joemulick/" target="_blank" rel="noopener noreferrer">
                    <img className={reachMeStyles.reachMeItem} alt="LinkedIn" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-linkedin_tqrwjt.png" /> 
                </a>
            </Col>
            <Col className={reachMeStyles.centerReachMeItem}>
                <a href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">
                    <img className={reachMeStyles.reachMeItem} alt="Github" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/blk-github-non_uv4dzi.png" />
                </a>
            </Col>
        </Row> 
    </Container>
    )
}
    export default ReachMe