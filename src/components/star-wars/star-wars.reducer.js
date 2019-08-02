import { LOAD_PEOPLE_SUCCESS } from "./star-wars.actions"

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case LOAD_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        people: action.people,
      }
    default:
      return state
  }
}
