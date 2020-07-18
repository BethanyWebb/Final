// Sets up MongoDB credentials
// Set up for localhost only - Will need changed for heroku
// secretOrKey is used by passport
module.exports = {
    mongoURL: "mongodb://localhost/final",
    secretOrKey: "secret"
}