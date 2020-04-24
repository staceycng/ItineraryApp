import React from 'react';
import { connect } from 'react-redux';
import SplashPage from './Splash-Page.jsx';
import SignIn from './Sign-In.jsx';
import SignUp from './Sign-Up.jsx';
import EventWizard from './Event-Wizard.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



// Check for token
// if (localStorage.jwtToken) {
//     // Set auth token header auth
//     setAuthToken(localStorage.jwtToken);
//     // Decode token and get user info and exp
//     const decoded = jwt_decode(localStorage.jwtToken);
//     // Set user and isAuthenticated
//     window.store.dispatch(setCurrentUser(decoded));


//     // Check for expired token
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp < currentTime) {
//         //Logout the user
//         window.store.dispatch(logoutUser());
//         //window.store.dispatch(clearCurrentProfile());

//         //Redirect to login
//         window.location.href = "/sign-in";
//     }
// }




class App extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect(route) {
        var path = `/${route}`;
        return <Redirect to={path} />
    }

    render() {
        return (
            <div id='app'>
                <Router>
                    <Switch>
                        <Route path="/sign-in">
                            <SplashPage redirect={this.redirect} />
                            <SignIn />
                        </Route>
                        <Route path="/create-account">
                            <SplashPage />
                            <SignUp />
                        </Route>
                        <Route path="/create-new">
                            <EventWizard />
                        </Route>
                        <Route path="/">
                            <SplashPage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;