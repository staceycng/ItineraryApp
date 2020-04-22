import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function SignIn(props){

    return(
        <div className='sign-in modal'>
                    <div className='default-text modal-header'>Sign In</div>
                    <input className='input-form input-text' onFocus="this.value=''" type="text" id="name" name="name" defaultValue="Email address"></input>
                    <input className='input-form input-text' type="text" id="password" name="password" defaultValue="Password"></input>
                    <div className='checkbox-container'>
                        <input className='check-box check' type="checkbox" id="keep-login" name="keep-login" value="keep-login"></input>
                        <span className='check-box'>Keep me logged in</span>
                        <div className='check-box' id ='forgot'>Forgot password?</div>
                    </div>
        </div>
    )
}

export default SignIn;