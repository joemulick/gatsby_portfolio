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

const MySkillsetSVG = (props) => {

    return (

    <Container>
        <Row>
            <Col>
                <Html />
            </Col>
            <Col>
                <Css />
            </Col>
            <Col>
                <Javascript />
            </Col>
            <Col>
                <Jquery />
            </Col>
            <Col>
                <Bootstrap />
            </Col>
            <Col>
                <Git />
            </Col>
            <Col>
                <Node />
            </Col>
            <Col>
                <Mysql />
            </Col>
        </Row>
        <Row>
            <Col>
                <Mongodb />
            </Col>
            <Col>
                <Express />
            </Col>
            <Col>
                <Reactsvg />
            </Col>
            <Col>
                <Aws />
            </Col>
            <Col>
                <Html />
            </Col>
            <Col>
                <Html />
            </Col>
            <Col>
                <Html />
            </Col>
            <Col>
                <Html />
            </Col>
        </Row>            
    </Container>
    )
}
    export default MySkillsetSVG