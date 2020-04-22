import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Modal, Form, FormControl } from 'react-bootstrap';

function SignUp(props) {
    return (
        <div className='account-modal'>
            <Modal.Dialog {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control size='sm' type="name" placeholder="First and Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control size='sm' type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control size='sm' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Control size='sm' type="phone" placeholder="Phone Number: (123)456-7890" />
                        </Form.Group>
                        <center>
                            <Button variant="success" type="submit" size="sm" block>
                                Start Planning!
                            </Button>
                        </center>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Form.Text className="text-muted">
                        OR
                    </Form.Text>
                    <Button variant="primary" type="submit" size="sm" block>
                        Sign up with Facebook
                            </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default SignUp;