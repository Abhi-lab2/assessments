const express = require("express");

const userController = require("./controllers/user.controller.js");
const studentController = require("./controllers/student.controller.js");
const batchController = require("./controllers/batch.controller.js");
const evaluationController = require("./controllers/evaluation.controller.js");
const submissionController = require("./controllers/submission.controller.js");

const stdEval = require("./controllers/stud.eval.js");

const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/student", studentController);
app.use("/batch", batchController);
app.use("/evaluation", evaluationController);
app.use("/submission", submissionController);

app.use("/evaluation", stdEval);

module.exports = app;
