// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// =============================================================
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
const router = express.Router();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Requiring model for syncing with database
var db = require("./models");

// Sequelize ORM for communicating with database
const sequelize = require("sequelize");

// Syncing sequelize model and then starting Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

// api rotes
const api_routes = require("./routes/api-routes")(app);
app.use("/api", api_routes);

// Servers static files from build during production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    console.log("production mode");
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// Servers static files from public folder during development
if (process.env.NODE_ENV === "development") {
  app.use(express.static("client/public"));
  app.get("*", function (req, res) {
    console.log("development mode");
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}


