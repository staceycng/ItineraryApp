import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

var initialState = {

};


let store;

// if (process.env.NODE_ENV === 'production') {
//     store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
// } else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

<<<<<<< HEAD
//}
=======
// }
>>>>>>> 61607c8b67824ccc34f0d95770a0d8e177c4c735


export default store;