import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
            <div className={container}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/expertise">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>
            </div>
    )
}
export default Layout