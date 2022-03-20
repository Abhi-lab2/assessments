const express = require("express");
//nodemon server.js
const userController = require("./src/controllers/users.controller");

// const galleryController = require("./src/controllers/gallery.controller");
const app = express();

app.use(express.json());

app.use("/users", userController);

// app.use("/gallery", galleryController);

module.exports = app;
