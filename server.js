const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Point urls to the files
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ─── DB CONFIG ──────────────────────────────────────────────────────────────────

const db = require('./config/keys').mongoURI;

// ─── CONNECT TO MONGODB ─────────────────────────────────────────────────────────

mongoose
    .connect(db)
    .then(() => console.log(`MongoDB Connected`))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello Tom'));

// ─── USE ROUTES ─────────────────────────────────────────────────────────────────
// Use the routes that we imported
// app.use = initial middleware

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));