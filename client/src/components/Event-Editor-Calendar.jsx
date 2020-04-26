import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { connect } from "react-redux";
import moment from 'moment';

import '../../dist/style.scss'

const mapStateToProps = state => {
    return { events: state.itinerary.itinerary.events, date: state.itinerary.itinerary.date };

};

class ConnectedCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps--->', prevProps.events);
        console.log('prevState--->', prevState.events);
        console.log('currProps-->', this.props.events);
        console.log('currState-->', this.state.events);

        var propsStr = JSON.stringify(this.props.events);
        var prevStateStr = JSON.stringify(prevState.events);

        if(propsStr !== prevStateStr){
            console.log('No match!');
            this.setState({
                events: this.props.events
            })
        }

    }

    componentDidMount() {
        console.log('Mounting!', this.props.events);
        var newEvents;
        if (this.props.events !== undefined) {
            newEvents = this.props.events;
        }
        else {
            newEvents = [];
        }
        this.setState({
            events: newEvents
        })
    }

    render() {
        var day = moment(this.props.date);
        var formattedDate = day.toISOString();
        return (
            <div id="calendar" className="e-e-i">
                <FullCalendar id="calendar-module"
                    defaultView="timeGridDay"
                    plugins={[timeGridPlugin, bootstrapPlugin]}
                    themeSystem={'bootstrap'}
                    height={750}
                    aspectRatio={0.5}
                    handleWindowResize={true}
                    defaultDate={formattedDate}
                    allDaySlot={false}
                    events={this.state.events}
                />
            </div>
        )
    }
}

const Calendar = connect(mapStateToProps)(ConnectedCalendar);
export default Calendar;