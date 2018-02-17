const express = require("express");
const router = express.Router();
const projects = require("../API/APIprojects");

module.exports = (app) => {
// returns projects API in json format to front end
    router.get('/projects', (req, res, next) => {
        console.log("projects API endpoint hit")
        res
        .status(200)
        .send(projects);
    });
    return router;
};