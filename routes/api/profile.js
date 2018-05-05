// Location, Bio, Experience, Education, Social Links

const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// @desc Tests profile route
// @access public

router.get('/test', (req, res) => res.json({ //<<< Serves JSON
    msg: "Profile Works"
}))
module.exports = router;