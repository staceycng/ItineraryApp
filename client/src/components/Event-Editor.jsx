import React from 'react';
import Header from './Header.jsx';
import SidebarMenu from './editor-components/SidebarMenu.jsx';
import EventEditorCalendar from './Event-Editor-Calendar.jsx';

import { connect } from "react-redux";
import { getItineraryById } from "../actions";
import { useParams } from 'react-router-dom';

import { Spinner } from 'react-bootstrap';

class EventEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itinerary: {}
        }
    }

    componentDidMount() {

        //let { itin_id } = useParams();

        console.log(this.props.match.params.itin_id);
        if (this.props.match.params.itin_id) {
            this.props.getItineraryById(this.props.match.params.itin_id);
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.profile.profile === null && this.props.profile.loading) {
    //         this.props.history.push("/not-found");
    //     }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     var currProps = this.state;
        
    //     var stringCurr = JSON.stringify(currProps.itinerary);
    //     var stringPrev = JSON.stringify(prevProps.itinerary.itinerary);
    //     console.log('currState-->', stringCurr);
    //     console.log('prevProps--->', stringPrev);

    //     if(stringCurr === stringPrev){
    //         console.log('Props are the same!');
    //     }
    //     else if ((stringCurr !== stringPrev) || (stringPrev === undefined)){
    //         console.log('Props not the same, update!!!!!!');
    //         this.setState({
    //             itinerary: this.props.itinerary.itinerary
    //         })
    //     }
    // }

    render() {

        let { loading, itinerary } = this.props.itinerary;

        console.log(loading);
        console.log(itinerary);

        return (
            <div id='e-e-c'>
                <Header />

                {itinerary === null || loading ? <Spinner animation="grow" variant="primary" /> : (
                    <div id='event-editor'>
                        <SidebarMenu />
                        <EventEditorCalendar itinerary={itinerary}/>
                    </div>
                )}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    itinerary: state.itinerary
});

export default connect(mapStateToProps, { getItineraryById })(EventEditor);