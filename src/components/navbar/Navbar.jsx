import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Nav = styled.nav`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 1rem;
    width: 100vw;
`

const NavItem = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 0 20px;
`


const Navbar = () => {
  return (
    <Nav>
        <ul>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/work">Work</NavItem>
            <NavItem to="/expertise">Services</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </ul>
    </Nav>
    )
}

export default Navbar
