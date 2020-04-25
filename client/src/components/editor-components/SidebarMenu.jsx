import React from 'react';
import { connect } from 'react-redux';
import TimePicker from 'react-bootstrap-time-picker';
import { Accordion, Card, Form, Row, Col } from 'react-bootstrap';

import FindEventMenu from './FindEventMenu.jsx';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id='sidebar-container' className='e-e-i default-text'>
                <Accordion defaultActiveKey="2">
                    <Card bg="light">
                        <Accordion.Toggle className="c-h" as={Card.Header} eventKey="0">
                            Import event from Facebook
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle className="c-h" as={Card.Header} eventKey="1">
                            Find Event
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <FindEventMenu />

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle className="c-h" as={Card.Header} eventKey="2">
                            Create a custom event
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Form>
                                    <Form.Control className ="c-e-f" type="text" placeholder="Event Title" />
                                    <Row>
                                        <Col>
                                            <Form.Control className ="c-e-f" placeholder="Location" />
                                        </Col>
                                        <Col>
                                            <TimePicker className ="c-e-f" start="0:00" end="23:59" step={30} />
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className ="c-e-f" placeholder="Notes/Description (Optional)" as="textarea" rows="3" />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default SidebarMenu;


