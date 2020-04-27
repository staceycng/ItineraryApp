import React from 'react';
import moment from 'moment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

var itinItem = (({ itin, history }) => {

    // var dateArr = itin.start;
    // var month = dateArr[1];
    // var date = dateArr[2];
    // var year = dateArr[3];

    // var dateString = `${month} ${date} ${year}`;

    var date = moment(itin.start);
    var formattedDate = date.format('MM-DD-YYYY');
    console.log('orig--->', date);
    console.log('string--->', formattedDate);

    var handleClick = (event) => {
        event.preventDefault();
        history.push(`/event-editor/${itin._id}`);
        console.log('pushing history!');
    }


    return(
        <div className="itin-item" onClick={handleClick}>
            <h5>{itin.name}</h5>
            <div><b>Date:</b> {formattedDate}</div>
            <div><b>Created By:</b> {itin.user.name}</div>
        </div>
    )
})

export default withRouter(itinItem);