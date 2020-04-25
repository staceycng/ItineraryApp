import React from 'react';
import Header from './Header.jsx';
import SidebarMenu from './editor-components/SidebarMenu.jsx';
import EventEditorCalendar from './Event-Editor-Calendar.jsx'

class EventEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div id='e-e-c'>
                <Header />
                <div id='event-editor'>
                    <SidebarMenu />
                    <EventEditorCalendar />
                </div>
            </div>
        )
    }
}

export default EventEditor;