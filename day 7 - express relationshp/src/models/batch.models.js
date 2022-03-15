const mongoose = require("mongoose");

// Step 1 :- creating the schema
const batchSchema = new mongoose.Schema(
  {
    batchName: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, //CreatedAt and UpdatedAt
  }
);

// Step 2 :- creating the model
const Batch = mongoose.model("batch", batchSchema);

module.exports = Batch;
