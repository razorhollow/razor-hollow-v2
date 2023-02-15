import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Navbar from './navbar/Navbar'

const Container = styled.div`
    font-color: red;
`



const Layout = ({ children }) => {
    return (
            <main>
                <Navbar />
                {children}
            </main>
    )
}
export default Layout