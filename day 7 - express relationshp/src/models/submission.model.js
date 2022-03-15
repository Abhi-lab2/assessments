const mongoose = require("mongoose");

// Step 1 :- Creating a Submission Schema..

const submissionSchema = new mongoose.Schema(
  {
    evalution_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "evaluation",
      require: "true",
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    marks: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true, //CreatedAt and UpdatedAt
  }
);

const Submission = mongoose.model("submission", submissionSchema);

module.exports = Submission;
