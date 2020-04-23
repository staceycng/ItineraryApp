import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { credentials: state.credentials };
};

function ConnectedHeader({ credentials }){
    if(credentials === 'NOT_LOGGED_IN'){
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
    else{
        return(
            <div id='header'>
                <div className='logo'>
                    night out.
                </div>
                <div className='icons'>
                    <div className='header-button header-signed-in'>
                        <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                            <i class="fas fa-plus-circle"></i>
                        </Link>
                        <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                            <span>Create New Itinerary</span>
                        </Link>
                    </div>
                    <div className='header-button header-signed-in'>
                        <Link to="/create-account" style={{ textDecoration: 'none' }}>
                            <i class="fas fa-mountain"></i>
                        </Link>
                        <Link to="/create-account" style={{ textDecoration: 'none' }}>See My Itineraries</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const Header = connect(mapStateToProps)(ConnectedHeader);
export default Header;