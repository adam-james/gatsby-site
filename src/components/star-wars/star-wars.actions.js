import { RSAA } from "redux-api-middleware"

export const loadPeople = () => ({
  [RSAA]: {
    endpoint: "https://swapi.co/api/people",
    method: "GET",
    types: ["@@people/REQUEST", "@@people/SUCCESS", "@@people/FAILURE"],
  },
})
