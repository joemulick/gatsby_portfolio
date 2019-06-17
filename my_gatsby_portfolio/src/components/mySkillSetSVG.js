import React from "react"
import Html from './svgicons/html.js'
import Css from './svgicons/css.js'
import Javascript from './svgicons/javascript.js'
import Jquery from './svgicons/jquery.js'
import Bootstrap from './svgicons/bootstrap.js'
import Git from './svgicons/git.js'
import Node from './svgicons/node.js'
import Mysql from './svgicons/mysql.js'
import Mongodb from './svgicons/mongodb.js'
import Express from './svgicons/express.js'
import Reactsvg from './svgicons/reactsvg.js'
import Aws from './svgicons/aws.js'
import { Container, Row, Col } from 'react-bootstrap';
// import mySkillSetSVGStyles from './mySkillSetSVG.module.scss'

const MySkillsetSVG = (props) => {

    return (

    <Container>
        <Row>
            <Col xs={4} md={3} lg={2}>
                    <Html />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Css />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Javascript />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Jquery />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Bootstrap />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Git />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Node />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Mysql />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Mongodb />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Express />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Reactsvg />
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Aws />
            </Col>
        </Row> 
    </Container>
    )
}
    export default MySkillsetSVG