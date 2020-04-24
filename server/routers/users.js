const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt')


router.get("/test", (req, res) => {});

router
    .route('/create')
    .post(async(req, res) => {
        // console.log(req.body)
        // res.send(req.body)
        try {
            await bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    console.error('Hash Error:', err)
                }
                req.body.password = hash
                User.create(req.body)
                    .then(() => res.status(200).send('User Created!'))
                    .catch(err => {
                        if (err.keyValue.email) {
                            res.status(400).send({ errorMessage: `The following email already exits: ${err.keyValue.email}` })
                        } else if (err.keyValue.username) {
                            res.status(400).send({ errorMessage: `The following username already exits: ${err.keyValue.username}` })
                        } else {
                            res.status(400).send(err)
                        }
                    })
            })
        } catch (err) {
            console.error(err)
        }
    })

router
    .route('/login')
    .post((req, res) => {
        res.status(200).send('Signed in!');

    })

module.exports = router;