let express = require('express');
let path = require('path');
let app = express();
const mongoose = require("mongoose");

const port = 3000;

// server api routes
const users = require('./router/users.js');
const itinerary = require('./router/itinerary.js');

//mongo database URI string
const db = require('../config/keys.js').mongo_uri;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.use("/users", users);
app.use("/itinerary", itinerary);


mongoose
.connect(db, { 
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server is listening on port ${port}`);
    }
})