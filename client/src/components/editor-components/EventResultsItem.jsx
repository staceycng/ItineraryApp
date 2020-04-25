import React from 'react';

function EventResults(props){

    var { name, location, city, state, free, category, image_url } = props.event;

    return(
        <div className='result'>
            <img src={image_url} height="70px"></img>
            <div className='result-info'>
                <div><b>{name}</b></div>
                <div>{location.address1}</div>
                <div>{location.city}, {location.state}</div>
                <div><i>{category}</i></div>
            </div>
        </div>
    )
}

export default EventResults;