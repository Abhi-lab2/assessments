const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userPictures: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("gallery", gallerySchema);
