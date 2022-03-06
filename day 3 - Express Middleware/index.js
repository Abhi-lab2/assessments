const express = require("express");

const app = express();

app.use(logger);

app.get("/books", logger, (req, res) => {
  const data = require("./book.json");
  return res.send({ route: "/books", authors: req.authors });
  // console.log("data: ", data);
});


app.get("/library", store("book"), (req, res) => {
  return res.send("Fetching all books");
});

app.get("/books/:Title_of_Book", store("book"), (req, res) => {
  const data = require("./books.json");
  // console.log("data: ", data);
  res.send(data);
  return res.send("Fetching all books");
});

function store(author) {
  return function logger(req, res, next) {
    if (author == "book") {
      return next();
    }
    return res.send("book not found");
  };
}

function logger(req, res, next) {
  if (req.path === "/books") {
    req.role = "user";
  } else if (req.path === "/admin") {
    req.role = "admin";
  } else {
    req.role = "otherPerson";
  }
  console.log("fetched data");
  next();
}

app.listen(5600, () => {
  console.log("port working successfully");
});
