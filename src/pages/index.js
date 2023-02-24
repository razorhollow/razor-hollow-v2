import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {backgroundImage, container, content} from './index.module.css'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>You've landed on the home page</h1>
      <div className={container}>
        <h2 className={content}>Work</h2>
        <StaticImage className="backgroundImage" style={{ position: "absolute" }} src="../images/into-sun.jpg" alt="" />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage

