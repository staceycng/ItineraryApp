import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from '../actions/auth.js';
import { clearCurrentItinerary } from '../actions';

const mapStateToProps = state => {
    return { credentials: state.auth.credentials };
};

function ConnectedHeader({ credentials, logoutUser }) {
    if (credentials === 'NOT_LOGGED_IN') {
        return (
            <div id='header'>
                <div className='logo'>
                    <NavLink to="/" style={{ textDecoration: 'none', color: "rgb(0, 153, 204)" }}>night out.</NavLink>
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
    else if (credentials === 'LOGGED_IN') {
        return (
            <div id='header'>
                <div className='logo'>
                    <NavLink to="/" style={{ textDecoration: 'none', color: "rgb(0, 153, 204)" }}>night out.</NavLink>
                </div>
                <div className='icons'>
                    <div className='header-button header-signed-in'>
                        <Link to="/create-new" style={{ textDecoration: 'none' }}>
                            <i class="fas fa-plus-circle"></i>
                        </Link>
                        <Link to="/create-new" style={{ textDecoration: 'none' }}>
                            <span>Create New Itinerary</span>
                        </Link>
                    </div>
                    <div className='header-button header-signed-in'>
                        <Link to="/view-existing" style={{ textDecoration: 'none' }}>
                            <i class="fas fa-mountain"></i>
                        </Link>
                        <Link to="/view-existing" style={{ textDecoration: 'none' }}>See My Itineraries</Link>
                    </div>
                    <div className='header-button header-signed-in' onClick={logoutUser}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <i class="fas fa-user-times"></i>
                            <div>Log Out</div>
                        </Link>
                        {/* <Link to="/view-existing" style={{ textDecoration: 'none' }}>Log Out</Link> */}
                    </div>
                </div>
            </div>
        )
    }
    else if (credentials === 'LOGGED_IN_EDITING') {

    }
}

const Header = connect(mapStateToProps, { logoutUser, clearCurrentItinerary })(ConnectedHeader);
export default Header;