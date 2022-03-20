const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// Creating User Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Bcrypt User-Schema, with Save as a Middleware...
userSchema.pre("save", function (next) {
  //Auto-gen a salt and hash: 
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

// this works with the normal fn only..
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Export
module.exports = mongoose.model("user", userSchema);
