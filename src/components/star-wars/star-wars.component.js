import React from "react"

const People = ({ people }) => (
  <section>
    <h2>Star Wars People</h2>
    <ul>
      {people.map(person => (
        <li key={person.url}>{person.name}</li>
      ))}
    </ul>
  </section>
)

export default class StarWarsContainer extends React.Component {
  componentDidMount() {
    this.props.loadPeople()
  }

  render() {
    if (this.props.loading) return <p>Loading...</p>
    return <People people={this.props.people} />
  }
}
