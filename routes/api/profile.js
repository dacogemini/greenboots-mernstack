// Location, Bio, Experience, Education, Social Links

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// Load Profile Model
const Profile = require('../../models/Profile');
// Load Profile Model
const User = require('../../models/User');

// @route GET api/profile/test
// @desc Tests profile route
// @access public

router.get('/test', (req, res) => res.json({ //<<< Serves JSON
    msg: "Profile Works"
}));

// @route GET api/profile
// @desc Get current users profile
// @access private

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is not a profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route POST api/profile
// @desc create user profile
// @access private

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => 
    {   // Get fields
        const profileFields = {}; //<<< Info from the form
        profileFields.user = req.user.id //<<< .user does NOT come from the form
        if(req.body.handle) profileFields.handle = req.body.handle; //<<< Check if the field we are looking for has come in
        if(req.body.company) profileFields.company = req.body.company; //<<< Check if the field we are looking for has come in
        if(req.body.website) profileFields.website = req.body.website; //<<< Check if the field we are looking for has come in
        if(req.body.bio) profileFields.bio = req.body.bio; //<<< Check if the field we are looking for has come in
        if(req.body.status) profileFields.status = req.body.status; //<<< Check if the field we are looking for has come in
        if(req.body.githubusername) profileFields.githubusername = req.body.githubusername; //<<< Check if the field we are looking for has come in
        // Skills - Split into an array
        if(typeof req.body.skills !== 'undefined') {
            profileFields.skills = req.body.skills.split(',')
        } 
        // Social 
        profileFields.social = {}; // Initialize
        // Comes in as this  // if exists...                // Set to this value                
        if(req.body.youtube) profileFields.social.youtube = req.body.youtube; //<<< Check if the field we are looking for has come in
        if(req.body.twitter) profileFields.social.twitter = req.body.twitter; //<<< Check if the field we are looking for has come in
        if(req.body.facebook) profileFields.social.facebook = req.body.facebook; //<<< Check if the field we are looking for has come in
        if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin; //<<< Check if the field we are looking for has come in
        if(req.body.instagram) profileFields.social.instagram = req.body.instagram; //<<< Check if the field we are looking for has come in

        // ─── SEARCH FOR USER BY LOGGED IN ID ─────────────────────────────

        Profile.findOne({ user: req.user.id })
            .then(profile => {
                if(profile) {
                    // IF USER HAS PROFILE UPDATE HERE v
                    Profile.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    )
                    .then(profile => res(profile));
                    // IF USER HAS PROFILE UPDATE HERE ^
                } 
                else 
                {   // Create 

                    // IF HANDLE EXISTS THROW ERROR v
                    Profile.findOne({ handle: profileFields.handle }).then(profile => {
                        if(profile) {
                            errors.handle = 'That handle already exists';
                            res.status(404).json(errors);
                        }
                    // IF HANDLE EXISTS THROW ERROR ^ 
                    //
                    // IF HANDLE DOES NOT EXIST CREATE PROFILE
                    new Profile(profileFields).save().then(profile => res.json(profile));
                    });
                }
            });
    }),
module.exports = router;