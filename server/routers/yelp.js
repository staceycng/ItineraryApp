const express = require('express');
const router = express.Router();
require('dotenv').config()

router
    .route('/events')
    .get((req, res) => {
        res.status(200).send("Yelp route is connected!");
        // console.log(process.env.YELP_API_KEY)
    })

// https://api.yelp.com/v3

module.exports = router