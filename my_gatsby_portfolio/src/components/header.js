import React from 'react'
import { Link } from 'gatsby'

// import './header.module.scss'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link className={headerStyles.link} to='/'>home</Link></li>
                    <li><Link to='/blog'>blog</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header