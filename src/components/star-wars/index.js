import React from "react"
import { Provider } from "react-redux"

import StarWars from "./star-wars.container"
import store from "./star-wars.store"

export default () => (
  <Provider store={store}>
    <StarWars />
  </Provider>
)
