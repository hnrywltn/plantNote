import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";



//import as object because its an export default
import  sessionReducer  from './session';
import plantReducer from './plants';


const rootReducer = combineReducers({
  session: sessionReducer,
  plant: plantReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
