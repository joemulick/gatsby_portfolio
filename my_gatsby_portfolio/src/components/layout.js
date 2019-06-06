import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <Header />
                {props.children}            
            <Footer />
        </div>
    )
}

export default Layout