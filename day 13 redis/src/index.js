const express = require("express");

const productsController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.use("/c", productsController);

module.exports = app;
