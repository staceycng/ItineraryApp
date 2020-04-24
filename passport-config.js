const fs = require('fs');
const path = require('path');
const User = require('./server/models/User.js');
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const jsonwebtoken = require('jsonwebtoken');

const PUB_KEY = fs.readFileSync(path.join(__dirname, 'publicKey.pem'), 'utf8')
const PRIV_KEY = fs.readFileSync(path.join(__dirname, 'privateKey.pem'), 'utf8', 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY
}


const issueToken = (user) => {
    const _id = user._id

    const expiresIn = '1d'

    const payload = {
        sub: _id,
        iat: Date.now()
    }
    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

    return {
        token: `Bearer ${signedToken}`,
        expires: expiresIn
    }
}
module.exports.issueToken = issueToken
module.exports.passportStrat = (passport) => {
    passport.use(new JwtStrategy(options, (payload, done) => {
        //might change from _id to email
        User.findOne({ _id: payload.sub })
            .then((user) => {
                user ? done(null, user) : done(null, false)
            })
            .catch(() => done(err, null))
    }))
}