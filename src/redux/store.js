import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import redFavoritos from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redFavoritos,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;