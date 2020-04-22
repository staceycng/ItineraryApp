const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
require('dotenv').config()

const yelp_url = 'https://api.yelp.com/v3'
const options = {
    headers: {
        'Authorization': `Bearer ${process.env.YELP_API_KEY}`
    }
}

router
    .route('/events')
    .get(async(req, res) => {
        await fetch(`${yelp_url}/businesses/north-india-restaurant-san-francisco`, options)
            .then((response) => response.json())
            .then((data) => res.status(200).send(data))
    })

module.exports = router