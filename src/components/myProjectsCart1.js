import React from "react"
import { Container, Row, Col, Card } from 'react-bootstrap';

import myProjectsCart1Styles from './myProjectsCart1.module.scss'

const MyProjectsCart1 = (props) => {

    return (

    <Container>
        <Row>
            <Col xs={12} md={12} lg={12}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1561327960/website-new_esjius.png" />
                    <Card.Body>
                        <Card.Title>Current Portfolio Site</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        NodeJS
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                        React
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                                        GatsbyJS
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
                                        GraphQL
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                                        Netlify
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                                        React-Bootstrap
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
                                        Contentful
                                    </a>
                                </div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                My newest portolfio website is built with GatsbyJS which is a modern site generator that allows you to build blazing fast web apps with React. This new site contains a blog which utilizes Contentful's API which allows me to manage my blog posts from an online portal. 
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick/gatsby_portfolio" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510724797/Cropped_brpac6.png" />
                    <Card.Body>
                        <Card.Title>Old Portfolio Site</Card.Title>
                        <Card.Text>
                            <div className={myProjectsCart1Styles.heightPad}>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        NodeJS
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                        React
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                        NextJS
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://zeit.co/now" target="_blank" rel="noopener noreferrer">
                                        Now ZEIT CDN
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer">
                                        reactstrap
                                    </a>
                                </div>

                            </div>
                                <div className={myProjectsCart1Styles.projectDescription}>
                                    My Old portfolio website was built with the efficient Next.js framework. Next.js is a framework for server rendered or statically exported react applications. This project was originally hosted on ZEIT's now webservice. The original code source can be viewed in my github via the link below.
                                </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick/Joseph-Mulick-Portfolio-Next-JS" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1561352398/verification-tool-resize-gimp_tyyz8f.png" />
                    <Card.Body>
                        <Card.Title>Verification Tool</Card.Title>
                        <Card.Text>
                            <div>
                                
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        Node
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                        React
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                                        Redux
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                        Express
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                        Mongo DB
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="http://www.passportjs.org/" target="_blank" rel="noopener noreferrer">
                                        Passport.js
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
                                        JWT
                                    </a>
                                </div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                My newest portolfio website is built with GatsbyJS which is a modern site generator that allows you to build blazing fast web apps with React. Utilizing graphQL, i was able to hook this website up to Contentful's blog API which I use to manage my blogs from their web portal.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick/verification-tool" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293169/TrollPatrul_lpnv0f.png" />
                    <Card.Body>
                        <Card.Title>Troll Patrul Website</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        Node
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://handlebarsjs.com/" target="_blank" rel="noopener noreferrer">
                                        Handlebars.js
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                        Mongo DB
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
                                        Heroku
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="http://www.passportjs.org/" target="_blank" rel="noopener noreferrer">
                                        Passport.js
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.npmjs.com/package/bcryptjs" target="_blank" rel="noopener noreferrer">
                                        Bcrypt.js
                                    </a>
                                </div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                Troll Patrul is a website dedicated to the Troll Patrul online community. It has a secured user authentication system that uses BCrypt and is a full stack web application that uses Node.js / Express and Handlebars as the viewengine. The web application was built 100% by me and is hosted at Heroku. The web app can be accessed at the link below the link below.
                                <br/>
                                <br/>
                            </div>
                            <div className={myProjectsCart1Styles.buttonContainerContainer}>
                                <div className={myProjectsCart1Styles.buttonContainer}>
                                    <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick/TrollPatrol" target="_blank" rel="noopener noreferrer">
                                        View Code On Github
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.buttonContainer}>
                                    <a className={myProjectsCart1Styles.projectButton} href="https://thawing-shelf-21665.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        View Hosted Website
                                    </a>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293167/Politihub_gu1dvi.png" />
                    <Card.Body>
                        <Card.Title>Politihub</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        Node
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                        React
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                        Express
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                        Mongo DB
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                        Custom CSS
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                        Multiple API's
                                </div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                Politihub is a React web application that allows the user to see all the latest bills that are to be voted on on various levels of government. It allows users to browse between Local, State, House and Senate bills. It also alows the user to filter their selection by a number of unique parameters. This web application pulls from two separate api’s. Directions to set up and run Politihub locally can be found in the github.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/ElmasSayed/PolitiHub" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293167/ReelFilms_rwgj6z.png" />
                    <Card.Body>
                        <Card.Title>Reel Films</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    HTML
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    CSS
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    Javasctipt
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
                                        jQuery
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp" target="_blank" rel="noopener noreferrer">
                                        AJAX
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    Multiple API's
                                </div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                Reel films is a web app that shows movie trailers based on the a users pre-selected criteria. We sort the movie trailers by genre, rating, year released and much more to tailor a custom trailer watching experience to the end user. We utilized 3 separate API’s including Youtube’s API, OMBD and The Movie DB.
                            </div>
                            <div className={myProjectsCart1Styles.buttonContainerContainer}>
                                <div className={myProjectsCart1Styles.buttonContainer}>
                                    <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick/Reel-Films" target="_blank" rel="noopener noreferrer">
                                        View Code On Github
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.buttonContainer}>
                                    <a className={myProjectsCart1Styles.projectButton} href="https://joemulick.github.io/Reel-Films/" target="_blank" rel="noopener noreferrer">
                                        View Hosted Website
                                    </a>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card className={myProjectsCart1Styles.mainCardContainer}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1561358502/Marketing-Mavens-NoEdit_ybxmcl.png" />
                    <Card.Body>
                        <Card.Title>Marketing Mavens</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        Node
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                        React
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://cssinjs.org/react-jss/?v=v10.0.0-alpha.21" target="_blank" rel="noopener noreferrer">
                                        React-JSS
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                        Next.js
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                                        Firebase
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
                                        Material UI
                                    </a>
                                </div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                Marketing Mavens is a website currently under construction. This website utilizes Next JS to create a server side rendered react application capable of great search engine optimization. This website uses Material UI for advanced UI templating and mobile responsiveness. Expected completion last quarter 2019.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick/Marketing-Mavens" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row> 
    </Container>
    )
}
    export default MyProjectsCart1