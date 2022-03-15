const mongoose = require("mongoose");

// Step1 .- creating a Students Schema..
const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: String, required: true },
    BatchName: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, //CreatedAt and UpdatedAt
  }
);

//  Step 2. - creating a model...
const Student = mongoose.model("student", studentSchema);

module.exports = Student;
