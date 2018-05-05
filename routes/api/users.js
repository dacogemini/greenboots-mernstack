// Authentication: username, email, password

const express = require('express');
const router = express.Router();

// @route GET api/users/test
// @desc Tests users route
// @access public

router.get('/test', (req, res) => res.json({ //<<< Serves JSON
    msg: "Users Works"
}))
module.exports = router;