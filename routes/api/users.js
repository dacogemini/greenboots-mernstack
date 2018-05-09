//what is this file for?
//authentication, username, email, password, users model
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
var passport = require("passport");

//load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//load User model
const User = require("../../models/User");

//@route            GET api/users/test
//what this does... Tests users route
//@access           Public
// router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//@route            GET api/users/register
//what this does... Registers a user
//@access           Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //check validsation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // looking for a record of the email the user is trying register with
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //Size of avatar
        r: "pg", //Rating
        d: "mm" //Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          } else {
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          }
        });
      });
    }
  });
});

//@route            GET api/users/login
//what this does... returning Json Web Token so user can login 'every user needs a token'
//@access           Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //check validsation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //find the user by email
  User.findOne({ email }).then(user => {
    //check for user
    if (!user) {
      errors.email = "User not Found";
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT payload
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route            GET api/users/current
//what this does... Return current user
//@access           Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
