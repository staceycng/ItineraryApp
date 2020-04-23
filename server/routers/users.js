const express = require('express');
const router = express.Router();
const User = require('../models/User.js');



router.get("/test", (req, res) => {
    res.status(200).send("test users route");
});

module.exports = router;