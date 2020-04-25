import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";


const mapDispatchToProps = (dispatch) => {
    return{
        saveItinerary: (payload) => dispatch(saveItinerary(payload)),
        saveItineraryDB: (payload) => dispatch(saveItineraryDB(payload)),
        saveItineraryDBById: (payload) => dispatch(saveItineraryDBById(payload))
    };
};

const mapStateToProps = state => {
    return { itinerary: state.itinerary.itinerary };
};

class ConnectedEventWizard2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collaborators: [
                {
                    name: 'Brian'
                }
            ]
        }
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleShare(event){
        event.preventDefault();
        var collaborator =  document.getElementById('collab-name').value;
        var currCollabs = this.state.collaborators;
        var collab = {
            name: collaborator,
            email: 'test'
        };
        currCollabs.push(collab);
        
        this.setState({
            collaborators: currCollabs
        })
    }

    handleDelete(event){
        event.preventDefault();
        var user = event.target.id;
        var currCollabs = this.state.collaborators;
        var index = currCollabs.indexOf(user);
        currCollabs.splice(index, 1);

        this.setState({
            collaborators: currCollabs
        })
    }

    // Send current state to store
    handleNext(event){
        event.preventDefault();
        console.log('Handling next-->', this.props);
        var payload = this.state;
        this.props.saveItinerary(payload);
        console.log('props--->', this.props);
        this.props.history.push('/event-editor');
    }

    // Send current state to store, send from store to database
     handleSave(event){
        event.preventDefault();
        var saved = this.props.itinerary;
        var payload = this.state;
        // If nothing has been saved to the store or store has not been sent to DB
        console.log('payload in component-->', payload);
        if((saved === null) || (!(saved._id))){
            // Save state to store & send info to DB
            this.props.saveItineraryDB(payload);
        }
        else{
            this.props.saveItineraryDBById(payload);
        }
        
    }

    render(){
        var collaborators = this.state.collaborators;
        console.log('state--->', this.state.collaborators);
        return (
            <div className="e-w2 e-w" id="add-collaborators">
                <Form>
                    <div className='form-item'>
                        <InputGroup className="mb-3">
                            <Form.Label><h3>Who do you want to collaborate with?</h3></Form.Label>
                            <Form.Control id="collab-name" size="lg" type="text" placeholder="Start typing a name!" />
                            <InputGroup.Append>
                                <Button variant="secondary" onClick={this.handleShare}>Select</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <div className='form-item collab-list'>
                    <h3>Current Collaborators</h3>
                    {collaborators.map((user) => (
                        <div className='collab-item'>{user.name}<span className='collab-delete' onClick={this.handleDelete} id={user.name}>x</span></div>
                    ))}
                    </div>
                    <div className='form-item form-button'>
                        <Button variant="light" type="submit" onClick={this.handleSave}>
                            Save Progress
                        </Button>
                        <Button variant="success" type="submit" onClick={this.handleNext}>
                            Onward!
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

var EventWizard2 = connect(mapStateToProps, mapDispatchToProps)(ConnectedEventWizard2);

export default withRouter(EventWizard2);