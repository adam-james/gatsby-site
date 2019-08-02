import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { apiMiddleware } from "redux-api-middleware"

import reducer from "./star-wars.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, apiMiddleware))
)
