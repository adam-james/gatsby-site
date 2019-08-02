export default (state = { loading: true }, action) => {
  switch (action.type) {
    case "@@people/SUCCESS":
      return {
        ...state,
        people: action.payload.results,
        loading: false,
      }
    default:
      return state
  }
}
