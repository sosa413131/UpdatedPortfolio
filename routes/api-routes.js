const express = require("express");
const router = express.Router();
const projects = require("../API/APIprojects");
const socialmedia = require("../API/APIsocialmedia.json")
const db = require('../models');

module.exports = (app) => {
    // returns projects API in json format to front end
    router.get('/projects', (req, res, next) => {
        console.log("projects API endpoint hit");
        res
            .status(200)
            .send(projects);
    });

    router.get("/socialmedia", (req, res, next) =>{
        console.log("social media API endpoint hit");
        res
            .status(200)
            .send(socialmedia);
    });

// posts contact info to database
    router.post("/postcontact", (req, res, next) => {
        console.log("postcontact API endpoint hit");
        db.contact.create(req.body).then(postcontact => {
            res
                .json(postcontact);
        });

    });


    return router;
};