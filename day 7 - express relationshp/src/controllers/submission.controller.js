const express = require("express");

const Submission = require("../models/submission.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const submission = await Submission.find()
      .populate({
        path: "batchId", //evaluation
        select: "date_of_evaluation",
        _id: 0,
      })
      .lean()
      .exec();

    return res.status(200).send({ submission: submission }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id)
      .populate({
        path: "batchId",
        select: "date_of_evaluation",
        _id: 0,
      })
      .lean()
      .exec();

    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();

    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const submission = await Submission.create(req.body);

    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
