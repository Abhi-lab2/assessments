const express = require("express");

const app = express();

app.use(logger);

app.get("/books", logger, (req, res) => {
  const data = require("./book.json");
  //   return res.send({ route: "/books", authors: req.authors });
  console.log("data: ", data);
});

//Middleware - store
app.get("/library", store("book"), (req, res) => {
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
    req.role = "somebody";
  }
  console.log("called");
  next();
}

app.listen(5200, () => {
  console.log("port working successfully");
});
