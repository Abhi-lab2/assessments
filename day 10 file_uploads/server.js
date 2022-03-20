const app = require("./index");
const connect = require("./src/configs/db");

app.listen(5005, async function () {
  try {
    await connect();
    console.log("listening on port 5005");
  } catch (err) {
    console.error(err.message);
  }
});
