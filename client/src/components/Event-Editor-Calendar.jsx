import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { connect } from "react-redux";
import moment from 'moment';

import '../../dist/style.scss'

const mapStateToProps = state => {
    console.log('events from store--->', state.itinerary.itinerary.events)
    return { events: state.itinerary.itinerary.events, date: state.itinerary.itinerary.date };
};

class ConnectedCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('in derived state--->', nextProps)
    //     if (nextProps.events !== prevState.events) {
    //         return { events: nextProps.events };
    //     }
    //     else return null;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('in CDU--->', prevProps)
    //     if (prevProps.events !== this.props.events) {
    //         //Perform some operation here
    //         this.setState({ events: this.props.events });
    //     }
    // }

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