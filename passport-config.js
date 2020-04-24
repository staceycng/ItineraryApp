const fs = require('fs');
const path = require('path');
const User = require('./server/models/User.js');
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')

const PUB_KEY = fs.readFileSync(path.join(__dirname, 'publicKey.pem'), 'utf8')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY
}

// const strat = new JwtStrategy(options, (payload, done) => {

// })


module.exports = (paasport) => {
    passport.use(new JwtStrategy(options, (payload, done) => {
        //might change from _id to email
        User.findOne({ _id: payload.sub })
            .then((user) => {
                user ? done(null, user) : done(null, false)
            })
            .catch(() => done(err, null))
    }))
}