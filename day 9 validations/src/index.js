const express = require("express");

const usersController = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.use("/users", usersController); // http://localhost:6002/users will go to usersController

module.exports = app;
