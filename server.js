// express - helps with routing
const express = require("express");
// cors - middleware for express
const cors = require("cors");
// mongoose - helps work with MongoDB
const mongoose = require("mongoose");
// passport - authentication middleware
const passport = require("passport");
// body-parser - parses for middleware
const bodyParser = require("body-parser");
// provides routes for passport
const Users = require("./api/routes/users");

// Creates express app and configures middleware needed for authentication
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Gets url from keys, then connects to database unless there's an error
const db = require("./config/keys").mongoURL;
mongoose.connect(db)
    .then(() => console.log("Connected to database!"))
    .catch((err) => console.log(err))

// makes passport use the configurations and user routes
require("./config/passport") (passport)
app.use(passport.initialize());
app.use("/api/users", Users);

// set up port and shows when it runs
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port", port));
