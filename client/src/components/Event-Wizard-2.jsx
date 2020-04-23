import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

class EventWizard2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collaborators: ['Brian', 'Stacey']
        }
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleShare(event){
        event.preventDefault();
        var collaborator =  document.getElementById('collab-name').value;
        var currCollabs = this.state.collaborators;
        currCollabs.push(collaborator);
        
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
                        <div className='collab-item'>{user}<span className='collab-delete' onClick={this.handleDelete} id={user}>x</span></div>
                    ))}
                    </div>
                    <div className='form-item form-button'>
                        <Button variant="success" type="submit">
                            Onward!
                    </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default EventWizard2;