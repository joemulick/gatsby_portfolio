import React from "react"
import { Container, Row, Col, Card } from 'react-bootstrap';

import myProjectsCart1Styles from './myProjectsCart1.module.scss'

const MyProjectsCart1 = (props) => {

    return (

    <Container>
        <Row>
            <Col xs={12} md={12} lg={12}>
                <Card style={{ minWidth: '16rem', margin: '20px auto' }}>
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
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card style={{ minWidth: '16rem', margin: '20px auto'}}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510724797/Cropped_brpac6.png" />
                    <Card.Body>
                        <Card.Title>Old Portfolio Site</Card.Title>
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
                                    My Old portfolio website was built with the efficient Next.js framework. Next.js is a framework for server rendered or statically exported react applications.
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
                <Card style={{ minWidth: '16rem', margin: '20px auto' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1561352398/verification-tool-resize-gimp_tyyz8f.png" />
                    <Card.Body>
                        <Card.Title>Verification Tool</Card.Title>
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
                                        MongoDB
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="http://www.passportjs.org/" target="_blank" rel="noopener noreferrer">
                                        Passport
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
                                        json-web-token
                                    </a>
                                </div>
                                <div className={myProjectsCart1Styles.techBox}>
                                    <a className={myProjectsCart1Styles.urlSize} href="https://github.com/validatorjs/validator.js" target="_blank" rel="noopener noreferrer">
                                        validator.js
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
                <Card style={{ minWidth: '16rem', margin: '20px auto' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293169/TrollPatrul_lpnv0f.png" />
                    <Card.Body>
                        <Card.Title>Current Portfolio Site</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>NodeJS</div>
                                <div className={myProjectsCart1Styles.techBox}>React</div>
                                <div className={myProjectsCart1Styles.techBox}>GatsbyJS</div>
                                <div className={myProjectsCart1Styles.techBox}>GraphQL</div>
                                <div className={myProjectsCart1Styles.techBox}>Netlify</div>
                                <div className={myProjectsCart1Styles.techBox}>Bootstrap</div>
                                <div className={myProjectsCart1Styles.techBox}>Contentful</div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                My newest portolfio website is built with GatsbyJS which is a modern site generator that allows you to build blazing fast web apps with React. Utilizing graphQL, i was able to hook this website up to Contentful's blog API which I use to manage my blogs from their web portal.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card style={{ minWidth: '16rem', margin: '20px auto' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293167/Politihub_gu1dvi.png" />
                    <Card.Body>
                        <Card.Title>Current Portfolio Site</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>NodeJS</div>
                                <div className={myProjectsCart1Styles.techBox}>React</div>
                                <div className={myProjectsCart1Styles.techBox}>GatsbyJS</div>
                                <div className={myProjectsCart1Styles.techBox}>GraphQL</div>
                                <div className={myProjectsCart1Styles.techBox}>Netlify</div>
                                <div className={myProjectsCart1Styles.techBox}>Bootstrap</div>
                                <div className={myProjectsCart1Styles.techBox}>Contentful</div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                My newest portolfio website is built with GatsbyJS which is a modern site generator that allows you to build blazing fast web apps with React. Utilizing graphQL, i was able to hook this website up to Contentful's blog API which I use to manage my blogs from their web portal.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card style={{ minWidth: '16rem', margin: '20px auto' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510293167/ReelFilms_rwgj6z.png" />
                    <Card.Body>
                        <Card.Title>Current Portfolio Site</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>NodeJS</div>
                                <div className={myProjectsCart1Styles.techBox}>React</div>
                                <div className={myProjectsCart1Styles.techBox}>GatsbyJS</div>
                                <div className={myProjectsCart1Styles.techBox}>GraphQL</div>
                                <div className={myProjectsCart1Styles.techBox}>Netlify</div>
                                <div className={myProjectsCart1Styles.techBox}>Bootstrap</div>
                                <div className={myProjectsCart1Styles.techBox}>Contentful</div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                My newest portolfio website is built with GatsbyJS which is a modern site generator that allows you to build blazing fast web apps with React. Utilizing graphQL, i was able to hook this website up to Contentful's blog API which I use to manage my blogs from their web portal.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">
                                    View Code On Github
                                </a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={6}>
                <Card style={{ minWidth: '16rem', margin: '20px auto' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Current Portfolio Site</Card.Title>
                        <Card.Text>
                            <div>
                                <div className={myProjectsCart1Styles.techBox}>NodeJS</div>
                                <div className={myProjectsCart1Styles.techBox}>React</div>
                                <div className={myProjectsCart1Styles.techBox}>GatsbyJS</div>
                                <div className={myProjectsCart1Styles.techBox}>GraphQL</div>
                                <div className={myProjectsCart1Styles.techBox}>Netlify</div>
                                <div className={myProjectsCart1Styles.techBox}>Bootstrap</div>
                                <div className={myProjectsCart1Styles.techBox}>Contentful</div>
                            </div>
                            <div className={myProjectsCart1Styles.projectDescription}>
                                My newest portolfio website is built with GatsbyJS which is a modern site generator that allows you to build blazing fast web apps with React. Utilizing graphQL, i was able to hook this website up to Contentful's blog API which I use to manage my blogs from their web portal.
                            </div>
                            <div>
                                <a className={myProjectsCart1Styles.projectButton} href="https://github.com/joemulick" target="_blank" rel="noopener noreferrer">
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