import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {backgroundImage, container, content, recent} from './index.module.css'
import ProfileCard from "../components/profileCard/ProfileCard"
import "@fontsource/open-sans/300.css"



const IndexPage = () => {
  return (
    <Layout>
      <div className={container}>
        <h2 className={content}>We are photographers, web developers, and storytellers serving families and businesses in Upstate NY</h2>
        <StaticImage className={backgroundImage} style={{ position: "absolute" }} src="../images/messy-hair.jpg" alt="" />
      </div>
      <div className={recent}>
        <ProfileCard />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage

