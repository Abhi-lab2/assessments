const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://abhijeet:abhijeet@cluster0.e73f4.mongodb.net/new?retryWrites=true&w=majority"
  );
};

module.exports = connect;
