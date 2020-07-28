const express = require("express");
const router = express.Router();
const Likes = require("../../models/likes");
const passport = require("passport");

// This will let us add to and then update a user object 
// not working yet
router.get("/", passport.authenticate(
    'jwt', { session: false } ), function(req, res) {
    const email = req.user.email;

    // @TODO write query here

    res.json([]);
});

module.exports = router;