import React from 'react';
import { connect } from 'react-redux';
import SplashPage from './Splash-Page.jsx';
import SignIn from './Sign-In.jsx';
import Overlay from './Overlay.jsx';
import SignUp from './Sign-Up.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='app'>
                <Router>
                    <Switch>
                        <Route path="/sign-in">
                            <SplashPage />
                            <SignIn />
                            <Overlay />
                        </Route>
                        <Route path="/create-account">
                            <SplashPage />
                            <SignUp />
                            <Overlay />
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