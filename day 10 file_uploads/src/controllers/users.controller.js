const express = require("express");
const User = require("../models/user.model");
const upload = require("../middlewares/uploads");
const router = express.Router();

const fs = require("fs"); // for Upadting and deletion of data inbuild module..

// Getting response
router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    // console.log(error);
    return res.send(500).send({ message: error.message });
  }
});

// Creaing a User for Single Pic
router.post("", upload.single("profilePic"), async (req, res) => {
  try {
    //   const user = await User.create(req.body)
    const user = await User.create({
      firstName: req.body.firstName,
      profilePic: req.file.path,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Updating a User Profile pic - patch (updating using [findbyid])
router.patch("/update/:id", upload.single("profilePic"), async (req, res) => {
  try {
    //   const user = await User.create(req.body)
    const user = await User.findById(req.params.id);
    fs.unlink(user.profilePic, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("user profile updated");
      }
    });
    //
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Deleting a post..
router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    fs.unlink(user.profilePic, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("User deleted");
      }
    });
    user.delete();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// Router Post for Multiple Pics upload
router.post("/multiple", upload.any("profilePic"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });

    const user = await User.create({
      firstName: req.body.firstName,
      profilePic: filePaths,
    });

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
