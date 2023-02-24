import * as React from 'react'
import { Link } from 'gatsby'
import { container, navLinks, navLinkItem, navLinkText, logo } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
const Layout = ({ pageTitle, children }) => {
    return (
            <div className={container}>
                <header>
                    <Link to="/" className={navLinkText}><StaticImage src='../images/rh.png' className={logo}/></Link>
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}><Link to="/work" className={navLinkText}>Work</Link></li>
                            <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                            <li className={navLinkItem}><Link to="/expertise" className={navLinkText}>Services</Link></li>
                            <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                            <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>
            </div>
    )
}
export default Layout