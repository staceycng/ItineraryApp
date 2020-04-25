const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary.js');
const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
require('dotenv').config()

//Input validators
const validateItineraryInput = require('../validation/itinerary.js');
const validateEventInput = require('../validation/event.js');

// router.get("/test", passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.status(200).send("test itinerary route");
// });

const fbOptions = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'https://localhost:3000/itinerary/auth/facebook/test',
    profileFields: ['emails', 'name']
}

const fbCallback = (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile)
}

passport.use(new FacebookStrategy(fbOptions, fbCallback))


router.get("/test", passport.authenticate('facebook', { scope: ['email'] }));
router.get("/auth/facebook/test", passport.authenticate('facebook', (err, user, info) => console.log('worked')), (req, res) => {
    res.status(200).send("facebook working!");
});


//@route   GET itinerary/
//@desc    Gets a users list of Itinerarys by their userID
//@access  Private
router.get("/", (req, res) => {
    Itinerary.find({ user: req.user.id })
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).json({ notfound: "No Itinerarys were found" }));
});


//@route   POST itinerary/
//@desc    Creates a new itinerary
//@access  Private
router.post("/", (req, res) => {
    let { errors, isValid } = validateItineraryInput(req.body);

    if (!isValid) {
        res.status(400).send(errors);
    } else {
        Itinerary.create(req.body).then(result => {
            res.status(200).send(result);
        })
    }
});

//@route   PUT itinerary/
//@desc    Updates an existing  itinerary
//@access  Private
router.post("/:id", (req, res) => {
    let { errors, isValid } = validateItineraryInput(req.body);

    if (!isValid) {
        res.status(400).send(errors);
    } else {
        Itinerary.update({ user: req.user.id, _id: req.params.id }, req.body).then(result => {
            res.status(200).send(result);
        })
    }
});

//@route   DELETE itinerary/:id
//@desc    Deletes an itinerary by its ID
//@access  Private
router.delete("/:id", (req, res) => {
    Itinerary.deleteOne({ _id: req.params.id, user: req.user.id }).then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

//@route   POST itinerary/event
//@desc    Creates a new event in an itinerary
//@access  Private
router.post("/event/:id", (req, res) => {
    let { errors, isValid } = validateEventInput(req.body);

    if (!isValid) {
        res.status(400).send(errors);
    } else {
        const newEvent = {
            name: req.body.name,
            location: req.body.location,
            image: req.body.image,
            time: req.body.time,
            notes: req.body.notes
        }

        Itinerary.update({ user: req.user.id, _id: req.params.id }, { $push: { events: newEvent } })
            .then(result => res.status(200).send(result))
            .catch(err => res.status(400).send(err));
    }
});

//@route   DELETE itinerary/event/:id
//@desc    Deletes an event in an itinerary by its ID
//@access  Private
router.delete("/event/:id/:event_id", (req, res) => {
    Itinerary.update({ user: req.user.id, _id: req.params.id }, { $pull: { events: req.params.event_id } })
        .then(result => res.status(200).send(result))
        .catch(err => res.status(400).send(err));
});

module.exports = router;