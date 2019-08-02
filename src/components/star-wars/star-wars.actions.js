import { RSAA } from "redux-api-middleware"

export const loadPeople = () => ({
  [RSAA]: {
    endpoint: "https://swapi.co/api/people",
    method: "GET",
    types: [
      "@@people/REQUEST",
      {
        type: "@@people/SUCCESS",
        payload: (action, state, resp) => {
          // TODO deserialize here
          return resp.json()
        },
      },
      {
        type: "@@people/FAILURE",
        meta: (action, state, resp) => {
          const { endpoint } = action["@@redux-api-middleware/RSAA"]
          console.error(`Error report required for ${endpoint}`)
          return resp
        },
      },
    ],
  },
})
