import axios from "axios"

const fetchPeople = () => axios.get("https://swapi.co/api/people")

export const LOAD_PEOPLE_SUCCESS = "LOAD_PEOPLE_SUCCESS"

const loadPeopleSuccess = people => ({
  type: LOAD_PEOPLE_SUCCESS,
  people,
})

export const loadPeople = () => async dispatch => {
  const resp = await fetchPeople()
  const { results: people } = resp.data
  dispatch(loadPeopleSuccess(people))
}
