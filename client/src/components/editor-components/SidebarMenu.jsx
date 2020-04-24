import React from 'react';
import { connect } from 'react-redux';

import { Accordion, Card } from 'react-bootstrap';

import FindEventMenu from './FindEventMenu.jsx';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id='container'>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Import event from Facebook
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Find Event
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <FindEventMenu />
                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Create a custom event
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default SidebarMenu;


