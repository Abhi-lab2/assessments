const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post(
  "/",
  //   Body for the First Name
  body("first_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Enter First Name")
    .isLength({ min: 4 })
    .withMessage("First Name must be at least 4 characters"),

  //   Body for the Last Name with custom length and inputs
  body("last_name").custom((value) => {
    if (value && value.length < 4) {
      throw new Error("Last Name is Invalid - enter at-least 4 characters");
    }
    return true;
  }),

  //   Body for the Email Address with custom Validation for single use...
  body("email")
    .isEmail()
    .custom(async (value) => {
      const userEmail = await User.findOne({ email: value });

      if (userEmail) {
        throw new Error("Email is already taken");
      }
      return true;
    }),

  //   Body for the Pincode
  body("pincode")
    .trim()
    .not()
    .isEmpty()
    .custom((value) => {
      if (value < 5) {
        throw new error("Invalid Pincode");
      }
      return true;
    }),

  // Body for age Validation Check (1-100)
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Incorrect Age Entered");
      } else {
        return true;
      }
    }),

  // Body for Gender Check - Male or Female
  body("gender")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Cannot be left empty")
    .custom((val) => {
      if (val == "Male" || val == "Female") {
        return true;
      }
      throw new Error("Enter proper Gender either male/female");
    }),

  async (req, res) => {
    try {
      console.log(body("first_name"));
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      //Linked with Email body
      const userName = await User.create(req.body);

      return res.status(200).send(userName);
    } catch (err) {
      return res.status(501).send({ message: err.message });
    }
  }
);

module.exports = router;
