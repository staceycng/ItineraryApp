const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary.js');

//Input validators
const validateItineraryInput = require('../validation/itinerary.js');
const validateEventInput = require('../validation/event.js');

router.get("/test", (req, res) => {
    res.status(200).send("test itinerary route");
});


//@route   GET itinerary/:id
//@desc    Gets a users list of Itinerarys by their userID
//@access  Private
router.get("/:id", (req, res) => {
    Itinerary.find({ user: req.params.id })
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

//@route   DELETE itinerary/:id
//@desc    Deletes an itinerary by its ID
//@access  Private
router.delete("/:id", (req, res) => {

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

        Itinerary.update({ user: req.params.id }, { $push: { events: newEvent } })
        .then(result => res.status(200).send(result))
        .catch(err => res.status(400).send(err));
    }



});

//@route   DELETE itinerary/event/:id
//@desc    Deletes a new event in an itinerary by its ID
//@access  Private
router.delete("/event/event_id", (req, res) => {

});

module.exports = router;