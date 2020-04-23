import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Modal, Form, FormControl } from 'react-bootstrap';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        }
        this.close = this.close.bind(this);
    }

    getInitialState() {
        return { showModal: false };
    };

    close(event) {
        if(event){
            event.preventDefault();
        }
        this.setState({ showModal: false });
    };

    open() {
        this.setState({ showModal: true });
    };

    render() {
        return (
            <div className='account-modal'>
                <Modal show={this.state.showModal} onHide={this.close} {...this.props}
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
                                <Button variant="success" type="submit" size="sm" block onClick={this.close}>
                                    Start Planning!
                            </Button>
                            </center>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Form.Text className="text-muted">
                            OR
                    </Form.Text>
                        <Button variant="primary" type="submit" size="sm" block onClick={this.close}>
                            Sign up with Facebook
                            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SignUp;