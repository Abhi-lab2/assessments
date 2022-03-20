const mongoose = require("mongoose");

// Creating User Schema
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Export
module.exports = mongoose.model("post", postSchema);
