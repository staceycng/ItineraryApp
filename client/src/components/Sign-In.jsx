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

var ConnectedSignIn = (props) => {
    var handleClick = (event) => {
        event.preventDefault();
        props.signIn();
    }
    
    return (
        <div className='account-modal'>
            <Modal.Dialog {...props}
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
                        <Button onClick={handleClick} variant="success" type="submit" size="sm" block>
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
            </Modal.Dialog>
        </div>
    )
}

var SignIn = connect(null, mapDispatchToProps)(ConnectedSignIn);

export default SignIn;