let express = require('express');
let path = require('path');
let app = express();
const mongoose = require("mongoose");
const passport = require('passport')
const { customStrategy } = require('../passport-config')
const FacebookStrategy = require('passport-facebook')


const port = process.env.port || 3000;

// server api routes
const users = require('./routers/users.js');
const itinerary = require('./routers/itinerary.js');
const yelp = require('./routers/yelp.js');

//mongo database URI string
const db = require('../config/keys.js').mongo_uri;

//passport configuration and initialization
customStrategy(passport)
app.use(passport.initialize());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

// use your routers here
app.use("/users", users);
app.use("/itinerary", itinerary);
app.use("/yelp", yelp);



mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
})