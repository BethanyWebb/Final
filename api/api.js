import axios from "axios";
const express = require("express");
const router = express.Router();

router.get("api/restaurantCity",(req,res) => {
    const { query: params } = req;
axios.get("https://opentable.herokuapp.com/api/restaurants&city=",{
params 
})
.then(results => res.json(results))
.catch(error => console.log(error))
})

module.exports = router