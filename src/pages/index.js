import React from "react"

import emoji from "react-easy-emoji";
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBody from "../components/mainbody"

import "./index.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{emoji("Hello 👋🏼")}</h1>
      <p>Welcome to my portfolio page.</p>
      <MainBody />
    </Layout>
  )
}

export default IndexPage
