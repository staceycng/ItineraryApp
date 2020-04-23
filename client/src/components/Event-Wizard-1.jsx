import React from 'react';
import { Form, Button, Overlay } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return{
        saveItinerary: (payload) => dispatch(saveItinerary(payload))
    };
};

const mapStateToProps = state => {
    return { itinerary: state.itinerary.itinerary };
};

class ConnectedEventWizard1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            date: null
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    // Get current date/time, save to local state
    componentDidMount() {
        var currDate = new Date();
        this.setState({
            date: currDate
        });
    }

    // Change local state based on user date/time selection
    handleDateChange(date) {
        this.setState({
            date: date
        });
    }

    handleTitleChange(event){
        var title = event.target.value;
        this.setState({
            title: title
        });
    }

    // Send current state to store
    handleNext(event){
        event.preventDefault();
        console.log('Handling next-->', this.props);
        var payload = this.state;
        this.props.saveItinerary(payload);
    }

    // Send current state to store, send from store to database
    handleSave(event){
        event.preventDefault();
        var saved = this.props.itinerary;

        // If nothing has been saved to the store or store has not been sent to DB
        if((saved === null) | (!saved._id)){
            // Save state to store & send info to DB
        }
        
    }

    render() {
        return (
            <div className="e-w1 e-w">
                <Form>
                    <div className='form-item'>
                        <Form.Group controlId="formBasicItineraryTitle">
                            <Form.Label><h3>What do you want to call your itinerary?</h3></Form.Label>
                            <Form.Control onChange={this.handleTitleChange} size="lg" type="text" placeholder="Ex. Happy Birthday Brian's Ferrets!" />
                        </Form.Group>
                    </div>
                    <div className='form-item'>
                        <Form.Group controlId="formBasicItineraryDate">
                            <Form.Label><h3>Start date and time?</h3></Form.Label>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                dateFormat="Pp"
                            />
                        </Form.Group>
                    </div>
                    <div className='form-item form-button'>
                        <Button variant="light" type="submit" onClick={this.handleSave}>
                            Save Progress
                            </Button>
                        <Link smooth to="/create-new/#add-collaborators">
                            <Button variant="success" type="submit" onClick={this.handleNext}>
                                Onward!
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        )
    }
}

var EventWizard1 = connect(mapStateToProps, mapDispatchToProps)(ConnectedEventWizard1);

export default EventWizard1;

