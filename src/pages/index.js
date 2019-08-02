import React from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

const fetchPeople = () => axios.get("https://swapi.co/api/people")

const StarWars = ({ people }) => (
  <section>
    <h2>Star Wars Characters</h2>
    <ul>
      {people.map(person => (
        <li key={person.url}>{person.name}</li>
      ))}
    </ul>
  </section>
)

class StarWarsContainer extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    const resp = await fetchPeople()
    const { results } = resp.data
    this.setState({ people: results, loading: false })
  }

  render() {
    if (this.state.loading) return <p>Loading...</p>
    return <StarWars people={this.state.people} />
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StarWarsContainer />
  </Layout>
)

export default IndexPage
