const app = require("./index");

const connect = require("./configs/db");

app.listen(6005, async function () {
  try {
    await connect();
    console.log("listening on port 6002");
  } catch (error) {
    console.error(err.message);
  }
});
