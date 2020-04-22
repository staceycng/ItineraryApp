import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './Header.jsx';
import SplashDisplay from './Splash-Display.jsx';


function SplashPage(props){

    return(
        <div>
            <Header />
            <SplashDisplay />
        </div>
    )


}

export default SplashPage;