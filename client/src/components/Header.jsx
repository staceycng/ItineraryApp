import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(props){

    return(
        <div id='header'>
            <div className='logo'>
                night out.
            </div>
            <div className='icons'>
                <div className='header-button'>
                    <Link to="/sign-in" style={{ textDecoration: 'none' }}>Sign In</Link>
                </div>
                <div className='header-button'>|</div>
                <div className='header-button'>
                    <Link to="/create-account" style={{ textDecoration: 'none' }}>Create an Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;