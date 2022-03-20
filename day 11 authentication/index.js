const express = require("express");
const connect = require("./src/configs/db");
const userController = require("./src/controllers/user.controller");
const postController = require("./src/controllers/post.controller");

const { register, login } = require("./src/controllers/auth.controller");
const app = express();

app.use(express.json());

app.use("/users", userController);

// Post method with Register Route...
app.post("/register", register);

// Post method with login Route...
app.post("/login", login);

app.use("/post", postController);

app.listen(6004, async () => {
  try {
    await connect();
    console.log("listening to port 6004");
  } catch (err) {
    console.log(err.message);
  }
});
