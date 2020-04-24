import React from 'react';
import EventResultsItem from './EventResultsItem.jsx';

class EventResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    name: 'Hamilton Los Angeles',
                    location: 'Pantages Theatre Los Angeles',
                    city: 'Los Angeles',
                    state: 'CA',
                    free: false,
                    category: ['Theatre', 'Music'],
                    img: "https://source.unsplash.com/1600x900/?dogs"
                },
                {
                    name: 'Hamilton Los Angeles',
                    location: 'Pantages Theatre Los Angeles',
                    city: 'Los Angeles',
                    state: 'CA',
                    free: false,
                    category: ['Theatre', 'Music'],
                    img: "https://source.unsplash.com/1600x900/?dogs"
                },
                {
                    name: 'Hamilton Los Angeles',
                    location: 'Pantages Theatre Los Angeles',
                    city: 'Los Angeles',
                    state: 'CA',
                    free: false,
                    category: ['Theatre', 'Music'],
                    img: "https://source.unsplash.com/1600x900/?dogs"
                },
                {
                    name: 'Hamilton Los Angeles',
                    location: 'Pantages Theatre Los Angeles',
                    city: 'Los Angeles',
                    state: 'CA',
                    free: false,
                    category: ['Theatre', 'Music'],
                    img: "https://source.unsplash.com/1600x900/?dogs"
                }
            ]
        }
    }

    render(){
        console.log(this.state.events, '<----events');
        return(
            <div id='results-container'>
                <center>
                    <div className='line'></div>
                    <h5>Results</h5>
                        <div id='results'>
                            {this.state.events.map((event) => (
                                <EventResultsItem event={event} />
                            ))}
                        </div>
                </center>
            </div>
        )
    }
}

export default EventResults;