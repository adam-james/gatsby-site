export default (state = { loading: true }, action) => {
  switch (action.type) {
    case "LOAD_PEOPLE_SUCCESS":
      return {
        ...state,
        people: action.payload.results,
        loading: false,
      }
    default:
      return state
  }
}
