// Authentication: username, email, password
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

// Load user model
const User = require('../../models/User');

// @route GET api/users/test 
// @desc Tests users route 
// @access public

router.get('/test', (req, res) => res.json({ //<<< Serves JSON
  msg: "Users Works"
}));

// @route POST api/users/register 
// @desc Register 
// @access public

router.post('/register', (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash; //<<< hash is what we want to store in our database
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

// @route GET api/users/login 
// @desc Login user / Return JWT Token 
// @access public

// Accept email, validate email, validate password
router.post('/login', (req, res) => {
  // user entered email 
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        return res.status(404).json({
          email: 'User not found'
        });
      }
      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => { // If matched, generate token
          if (isMatch) {
            res.json({
              msg: 'Success'
            });
          } else {
            return res.status(400).json({
              password: 'Password incorrect'
            });
          }
        })
    });
});

module.exports = router;