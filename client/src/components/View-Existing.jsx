import React from 'react';
import Header from './Header.jsx';
import { Nav } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

import ItinItems from './View-Existing-Itin-Item.jsx'
import { connect } from "react-redux";

import { getItineraries, getInvitedItineraries } from '../actions';

class ViewExisting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itin: "my-itins",
            myItineraries: [
                {
                    _id: '1',
                    user: '3BestFriends',
                    name: 'Best Bud Breakfast',
                    start: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                    description: 'This is a test itinerary',
                    events: [{
                        name: 'Test Event',
                        location: 'Test location',
                        image: 'https://source.unsplash.com/1600x900/?dogs',
                        time: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                        notes: 'Test note'
                    }],
                    collaborators: [{ name: 'Brian Vargas', email: 'brian@brian.com' }, { name: 'Lee Mchale', email: 'crustyprawn@canada.ca' }]
                },
                {
                    _id: '2',
                    user: '3BestFriends',
                    name: 'Best Bud Brunch',
                    start: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                    description: 'This is a test itinerary x5',
                    events: [{
                        name: 'Test Event x5',
                        location: 'Test location',
                        image: 'https://source.unsplash.com/1600x900/?dogs',
                        time: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                        notes: 'Test note'
                    }],
                    collaborators: [{ name: 'Brian Vargas', email: 'brian@brian.com' }, { name: 'Lee Mchale', email: 'crustyprawn@canada.ca' }]
                }
            ],
            sharedItineraries: [
                {
                    _id: '3',
                    user: 'Not3BestFriends',
                    name: 'Best Bud Business Breakfast',
                    start: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                    description: 'This is a test itinerary',
                    events: [{
                        name: 'Test Event',
                        location: 'Test location',
                        image: 'https://source.unsplash.com/1600x900/?dogs',
                        time: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                        notes: 'Test note'
                    }],
                    collaborators: [{ name: 'Best Friends', email: 'bestfriends@brian.com' }, { name: 'Lee Mchale', email: 'crustyprawn@canada.ca' }]
                },
                {
                    _id: '4',
                    user: 'DefinitelyNot3BestFriends',
                    name: 'Best Bud Babyshower Brunch',
                    start: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                    description: 'This is a test itinerary x5',
                    events: [{
                        name: 'Test Event x5',
                        location: 'Test location',
                        image: 'https://source.unsplash.com/1600x900/?dogs',
                        time: 'Tue Mar 24 2021 17:00:00 GMT-0700 (Pacific Daylight Time)',
                        notes: 'Test note'
                    }],
                    collaborators: [{ name: 'Best Friends', email: 'bestfriends@brian.com' }, { name: 'Lee Mchale', email: 'crustyprawn@canada.ca' }]
                }
            ]
        }

        this.handleTab = this.handleTab.bind(this);
    }

    componentDidMount() {
        this.props.getItineraries();
        this.props.getInvitedItineraries();
    }

    handleTab(option) {
        this.setState({
            itin: option
        })
    }

    render() {

        let { itineraries, itinerariesInvited, loading } = this.props.itinerary;

        let myItins, sharedItins;


            if (itineraries.length > 0) {
                myItins = itineraries.map((itin) => (<ItinItems itin={itin} />));
            } else {
                myItins = <h4>No itineraries found...</h4>
            }

            if (itinerariesInvited.length > 0) {
                sharedItins = itinerariesInvited.map((itin) => (<ItinItems itin={itin} />));
            } else {
                sharedItins = <h4>No shared itineraries found...</h4>
            }

        return (
            <div id="view-existing-container">
                <Header />
                <div id="view-existing">
                    <Nav className="justify-content-center v-e-nav" variant="pills"
                        defaultActiveKey="my-itins"
                        onSelect={(selectedKey) => this.handleTab(selectedKey)}
                    >
                        <Nav.Item>
                            <Nav.Link style={{ textDecoration: 'none', color: "white" }} eventKey="my-itins">Your Itineraries</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ textDecoration: 'none', color: "white" }} eventKey="shared-itins">Shared Itineraries</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div id="itin-viewer">
                        {(this.state.itin === "my-itins") ? myItins : sharedItins}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itinerary: state.itinerary
});

export default connect(mapStateToProps, { getItineraries, getInvitedItineraries })(ViewExisting);