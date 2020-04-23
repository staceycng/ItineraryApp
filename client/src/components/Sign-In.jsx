import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Modal, Form, FormControl } from 'react-bootstrap';
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn())
    };
}

class ConnectedSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        }
        this.close = this.close.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getInitialState() {
        return { showModal: false };
    };

    close(event) {
        if (event) {
            event.preventDefault();
        }
        console.log('Closing!');
        this.setState({ showModal: false });
    };

    open() {
        this.setState({ showModal: true });
    };

    handleClick(event) {
        event.preventDefault();
        this.props.signIn();
        this.close();
    }

    render() {
        return (
            <div className='account-modal'>
                <Modal show={this.state.showModal} onHide={this.close} {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <center>
                                <Button onClick={this.handleClick} variant="success" type="submit" size="sm" block>
                                    Submit
                        </Button>
                                <Button variant="primary" type="submit" size="sm" block>
                                    Sign in with Facebook
                        </Button>
                            </center>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Form.Text className="text-muted">
                            Don't have an account? <Link to="/create-account">Sign up here!</Link>
                        </Form.Text>
                    </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

var SignIn = connect(null, mapDispatchToProps)(ConnectedSignIn);

export default SignIn;