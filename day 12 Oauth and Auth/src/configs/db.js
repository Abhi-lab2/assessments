const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://abhijeet:abhijeet@cluster0.7yn1m.mongodb.net/Oauth"
  );
};
