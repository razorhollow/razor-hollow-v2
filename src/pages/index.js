import * as React from "react"
import Layout from "../components/layout"



const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>You've landed on the home page</h1>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage

