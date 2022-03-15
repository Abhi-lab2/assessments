const express = require("express");

const Student = require("../models/student.models");

const router = express.Router();

// Student
router.get("", async (req, res) => {
  try {
    const student = await Student.find().lean().exec();

    return res.status(200).send({ student: student }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).lean().exec();

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
