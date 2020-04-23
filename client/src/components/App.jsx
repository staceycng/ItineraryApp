import React from 'react';
import { connect } from 'react-redux';
import SplashPage from './Splash-Page.jsx';
import SignIn from './Sign-In.jsx';
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
        this.redirect = this.redirect.bind(this);
    }

    redirect(route){
        var path = `/${route}`;
        return <Redirect to={path} />
    }

    render() {
        return (
            <div id='app'>
                <Router>
                    <Switch>
                        <Route path="/sign-in">
                            <SplashPage redirect={this.redirect}/>
                            <SignIn />
                        </Route>
                        <Route path="/create-account">
                            <SplashPage />
                            <SignUp />
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