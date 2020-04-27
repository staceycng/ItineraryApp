import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import { Toast } from 'react-bootstrap';
import { connect } from "react-redux";
import moment from 'moment';

import '../../dist/style.scss'

const mapStateToProps = state => {
    return { events: state.itinerary.itinerary.events, start: state.itinerary.itinerary.start };

};

class ConnectedCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            title: '',
            location: '',
            description: '',
            showToast: false
        }
        this.handleDateClick = this.handleDateClick.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
    }

    toggleToast(){
        this.setState({
            showToast: !(this.state.showToast)
        })
    }

    handleDateClick(arg) {
        var event = arg.event;

        var title = event.title;
        var location = event.extendedProps.location;
        var description = event.extendedProps.notes;

        this.setState({
            title,
            location,
            description,
            showToast: true
        }, () => { console.log(this.state) });
    }

    static getDerivedStateFromProps(props, state) {
        return { events: props.events }
    }

    componentDidMount() {
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
        var day = moment(this.props.start);
        var formattedDate = day.toISOString();
        console.log('formatted--->', formattedDate);
        var newEvents;
        if (this.state.events) {
            newEvents = [...this.state.events];
        }
        else {
            newEvents = [];
        }
        return (
            <div id="calendar" className="e-e-i">
                <FullCalendar id="calendar-module"
                    defaultView="timeGridDay"
                    plugins={[timeGridPlugin, bootstrapPlugin, interactionPlugin]}
                    themeSystem={'bootstrap'}
                    height={750}
                    aspectRatio={0.5}
                    handleWindowResize={true}
                    defaultDate={formattedDate}
                    allDaySlot={false}
                    events={newEvents}
                    eventClick={this.handleDateClick}
                />
                <Toast show={this.state.showToast} onClose={this.toggleToast}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="toast-header">More About This Event!</strong>
                    </Toast.Header>
                    <Toast.Body>
                        <div className='toast-message'><b>Event:</b> {this.state.title}</div>
                        <div className='toast-message'><b>Location:</b> {this.state.location}</div>
                        <div className='toast-message'><b>Event Description:</b> {this.state.description}</div>
                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}

const Calendar = connect(mapStateToProps)(ConnectedCalendar);
export default Calendar;