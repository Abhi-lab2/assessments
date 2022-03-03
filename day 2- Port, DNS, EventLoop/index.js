const express = require("express");

const app = express();

app.get("/books", function (req, res) {
  console.log("hey");
  res.send({
    Book1: "ULYSSES",
    Book2: "East of Eden",
    Book3: "Number the Stars",
    Book4: "Noli Me Tangere ",
    Book5: "Brave New World",
  });
});

app.listen(5000, () => {
  console.log("5000 responded successfully");
});
