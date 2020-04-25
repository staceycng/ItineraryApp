import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import '../../dist/style.scss'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2020-05-01"
        }
    }

    render() {
        return (
            <div id="calendar" className="e-e-i">
                <FullCalendar id="calendar-module"
                    defaultView="timeGridDay"
                    plugins={[timeGridPlugin, bootstrapPlugin]}
                    weekends={true}
                    themeSystem= {'bootstrap'}
                    allDaySlot={false}
                    height={2000}
                    aspectRatio={0.5}
                    handleWindowResize={true}
                    defaultDate={this.state.date}
                />
            </div>
        )
    }
}

export default Calendar;