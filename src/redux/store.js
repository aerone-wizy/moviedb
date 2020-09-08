import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import MoviesReducer from "./movies/movies.reducer";
// import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  // rootReducer,
  MoviesReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
