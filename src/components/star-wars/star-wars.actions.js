import { RSAA } from "redux-api-middleware"

export const loadPeople = () => ({
  [RSAA]: {
    endpoint: "https://swapi.co/api/people",
    method: "GET",
    types: [
      "LOAD_PEOPLE_REQUEST",
      "LOAD_PEOPLE_SUCCESS",
      "LOAD_PEOPLE_FAILURE",
    ],
  },
})
