import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

// import indexStyles from './index.module.scss'
// import ScrollingColorBackground from "react-scrolling-color-background"
import { Button } from 'react-bootstrap';

const IndexPage = () => {

    return(
        <Layout>
            <Head title="Home"/>
                <h1>Hello</h1>  
                <h2>Joe</h2>
                <p>Need a developer? <Link to="/contact"><Button>Contact Me</Button></Link></p>
        </Layout>
    )
}

// const IndexPage = () => {

//     return(
//         <Layout>
//             <Head title="Home"/>

//             <ScrollingColorBackground
//             selector='.js-color-stop[data-background-color]'
//             colorDataAttribute='data-background-color'
//             initialRgb='rgb(0, 0, 0)'
//             />
//                 <div className={indexStyles.secOne}>
//                 <section
//                 data-background-color='rgb(32, 202, 172)'
//                 className='js-color-stop'
//                 >
//                     <h1>Hello</h1>  
//                 </section>
//                 </div>
//                 <div className={indexStyles.secTwo}>
//                 <section
//                 data-background-color='rgb(60, 191, 246)'
//                 className='js-color-stop'
//                 >
//                     <h2>Joe</h2>
//                 </section>
//                 </div>
//                 <div className={indexStyles.secThree}>
//                 <section
//                 data-background-color='rgb(60, 191, 246)'
//                 className='js-color-stop'
//                 > 
//                     <p>Need a developer? <Link to="/contact"><Button>Contact Me</Button></Link></p>
//                 </section>    
//                 </div> 
//         </Layout>
//     )
// }

export default IndexPage