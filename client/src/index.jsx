import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

const initialState = { 
    credentialsStatus: 'NOT_LOGGED_IN'
};

const store = createStore(rootReducer, initialState);
ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));