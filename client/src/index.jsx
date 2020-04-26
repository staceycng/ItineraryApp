import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import store from './store/Index.js';
import { signIn, saveItinerary, saveItineraryDB, saveItineraryDBById } from './actions/index.js';
import { Provider } from "react-redux";

window.store = store;
window.signIn = signIn;
window.saveItinerary = saveItinerary;
window.saveItineraryDB = saveItineraryDB;
window.saveItineraryDBById = saveItineraryDBById;

ReactDom.render(<Provider store={store}><App /> </Provider>, document.getElementById('app'));