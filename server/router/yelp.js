const express = require('express');
const router = express.Router();

router
    .route('/events')
    .get((req, res) => {
        res.status(200).send("Yelp route is connected!");
    })

// https://api.yelp.com/v3

module.exports = router