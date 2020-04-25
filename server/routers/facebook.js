const express = require('express');
const router = express.Router();
const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
require('dotenv').config()



const fbOptions = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'https://localhost:3000/facebook/auth/test',
    profileFields: ['emails', 'name']
}

const fbCallback = (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile)
}

passport.use(new FacebookStrategy(fbOptions, fbCallback))


router.get("/test", passport.authenticate('facebook', { scope: ['email'] }));
router.get("/auth/test", passport.authenticate('facebook', (err, user, info) => console.log('worked')), (req, res) => {
    res.status(200).send("facebook working!");
});



module.exports = router;