const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt')


router.get("/test", (req, res) => {
    res.status(200).send("test users route");
});

router
    .route('/create')
    .post(async(req, res) => {
        try {
            await bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    console.error('Hash Error:', err)
                }
                req.body.password = hash
                User.create(req.body)
                    .then(() => res.status(200).send('User Created!'))
                    .catch(err => res.status(400).send(err))
            })
        } catch (err) {
            console.error(err)
        }
    })


module.exports = router;