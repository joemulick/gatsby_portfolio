import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>Joe</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

export default IndexPage