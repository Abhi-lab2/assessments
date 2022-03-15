const express = require("express");

const Batch = require("../models/batch.models.js");

const router = express.Router();

// Batch :- has fields like Batch name, createdAt, updatedAt

router.get("", async (req, res) => {
  try {
    const batch = await Batch.find().lean().exec();

    return res.status(200).send({ batch: batch }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id).lean().exec();

    return res.status(200).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const user = await Batch.create(req.body);

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Batch.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
