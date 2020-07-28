const express = require("express");
const router = express.Router();
const Likes = require("../../models/likes");
const passport = require("passport");

// This will let us add to and then update a user object 
// not working yet
router.post("/", passport.authenticate(
    'jwt', { session: false } ), function(req, res) {
    const {body, user} = req;
    const {email} = user;

    const like = new Likes({
        userEmail: email,
        restaurantID: req.body.restaurantID
    });
    like.save();

    res.json({});
});

module.exports = router;