import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
// import DevTools from './containers/DevTools'

// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(...middleware)
//     // other store enhancers if any
//   )
// );
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
)
// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), DevTools.instrument())
// )
// const store = createStore(
//   rootReducer,
// );

export default store;