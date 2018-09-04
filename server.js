const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB | Mongoose creates a 'virtual object database'
// Mongoose converts Relational DB (firtName, lastName, Phone) info into (1) object
mongoose
  .connect(db)
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Deploy to Heroku PORT or locally to port 5000
const port = process.env.PORT || 5000;

// Run Server | Use ES6 Template Literal
app.listen(port, () => console.log(`Server running on ${port}`));
