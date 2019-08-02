import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StarWars from "../components/star-wars"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StarWars />
  </Layout>
)

export default IndexPage
