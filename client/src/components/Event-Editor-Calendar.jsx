import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../../dist/style.scss'

class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div id="calendar" className="e-e-i">
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
            </div>
        )
    }
}

export default Calendar;