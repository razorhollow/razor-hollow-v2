import * as React from "react"
import Navbar from "../components/navbar/Navbar"
import Layout from "../components/layout"



const IndexPage = () => {
  return (
    <Layout>
      <h1>You've landed on the home page</h1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
