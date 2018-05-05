// Comments/notes

const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// @desc Tests post route
// @access public

router.get('/test', (req, res) => res.json({ //<<< Serves JSON
    msg: "Post Works"
}))
module.exports = router;