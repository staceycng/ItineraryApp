import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

var initialState = {

};

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;