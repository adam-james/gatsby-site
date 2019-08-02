import { connect } from "react-redux"

import StarWars from "./star-wars.component"
import { loadPeople } from "./star-wars.actions"

const mapStateToProps = state => {
  return {
    loading: state.loading,
    people: state.people,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPeople: () => dispatch(loadPeople()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarWars)
