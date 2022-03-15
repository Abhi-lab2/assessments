const app = require("./index.js");

const connect = require("./configs/db.js");

app.listen(5001, async () => {
  try {
    await connect();
    console.log("listening on port 5100");
  } catch (err) {
    console.log(err);
  }
  // console.log("listening on port 5100");
});
