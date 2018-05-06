// Authentication: username, email, password

const express = require('express');
const router = express.Router();
// Load user model
const User = require('../../models/User');


// @route GET api/users/test
// @desc Tests users route
// @access public

router.get('/test', (req, res) => res.json({ //<<< Serves JSON
    msg: "Users Works"
}));

// @route GET api/users/register
// @desc Register users 
// @access public

router.post('/register', (req, res) => {
    User.findOne({
        // Access email through a form by req.body... 
        email: req.body.email
    })
});

module.exports = router;