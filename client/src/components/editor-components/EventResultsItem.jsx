import React from 'react';
import { Button } from 'react-bootstrap';

function EventResults(props) {

    var { name, location, city, state, free, category, image_url } = props.event;

    var saveEvent = (event) => {
        event.preventDefault();
        console.log('Saved!');
    }

    return (
        <div className='result'>
            <img src={image_url} height="70px"></img>
            <div className='result-info'>
                <div><b>{name}</b></div>
                <div>{location.address1}</div>
                <div>{location.city}, {location.state}</div>
                <div><i>{category}</i></div>
            </div>
            <Button variant="success" id="add-yelp" type="submit" size="sm" onClick={saveEvent}>
                Add Event!
            </Button>
        </div>
    )
}

export default EventResults;