import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

var itinItem = (({ itin, history }) => {

    var dateArr = itin.start.split(' ');
    var month = dateArr[1];
    var date = dateArr[2];
    var year = dateArr[3];

    var dateString = `${month} ${date} ${year}`;

    var handleClick = (event) => {
        event.preventDefault();
        history.push(`/event-editor#${itin._id}`);
        console.log('pushing history!');
    }


    return(
        <div className="itin-item" onClick={handleClick}>
            <h5>{itin.name}</h5>
            <div><b>Date:</b> {dateString}</div>
            <div><b>Created By:</b> {itin.user}</div>
            <div><b>Description:</b> {itin.description}</div>
        </div>
    )
})

export default withRouter(itinItem);