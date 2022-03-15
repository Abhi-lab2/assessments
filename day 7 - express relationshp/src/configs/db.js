const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://abhijeet:abhijeet@cluster0.7yn1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;
