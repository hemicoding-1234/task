import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
)