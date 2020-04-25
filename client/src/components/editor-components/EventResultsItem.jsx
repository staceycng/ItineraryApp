import React from 'react';

function EventResults(props){

    var { name, location, city, state, free, category, img } = props.event;

    return(
        <div className='result'>
            <img src={img} height="70px"></img>
            <div className='result-info'>
                <div><b>{name}</b></div>
                <div>{location}</div>
                <div>{city}, {state}</div>
                <div><i>{category[0]}</i></div>
            </div>
            
        </div>
    )
}

export default EventResults;