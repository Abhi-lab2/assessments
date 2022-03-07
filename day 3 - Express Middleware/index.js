const express = require("express");
const app = express();

//For Single book data...
const oneBook = (req, res, next) => {
  req.name = req.params.name;
  console.log("Data for Single/One Book");
  next();
};

app.get("/books/:name", oneBook, (req, res) => {
  const data = require("./books.json");
  res.send(data);
  return res.send({ bookName: req.params.name });
});

// For Multiple Books...
const books = (req, res, next) => {
  console.log("Fetching All Books");
  next();
};

app.get("/books", books, (req, res) => {
  const data = require("./book1.json");
  res.send(data);
  return res.send("books");
});

app.listen(6100, () => {
  console.log("Port working successfully");
});
