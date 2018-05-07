const jwtstrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose'); //<<< Search for the user that comes with the payload
const User = mongoose.model('users');
const keys = require('../config/keys'); //<<< keys has our secret in it

const opts ={}; //<<< Empty object for options
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new jwtstrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
    }));
}

