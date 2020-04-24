import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';


function EventWizard1(props) {


    return (
        <div className="e-w1 e-w">
            <Form>
                <div className='form-item'>
                    <Form.Group controlId="formBasicItineraryTitle">
                        <Form.Label><h3>What do you want to call your itinerary?</h3></Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Ex. Happy Birthday Brian's Ferrets!" />
                    </Form.Group>
                </div>
                <div className='form-item'>
                    <Form.Group controlId="formBasicItineraryDate">
                        <Form.Label><h3>Start date and time?</h3></Form.Label>
                        <Form.Control size="lg" type="text" />
                    </Form.Group>
                </div>
                <div className='form-item form-button'>
                    <Link smooth to="/create-new/#add-collaborators">
                        <Button variant="success" type="submit">
                            Onward!
                        </Button>
                    </Link>
                </div>
            </Form>
        </div>
    )
}

export default EventWizard1;

