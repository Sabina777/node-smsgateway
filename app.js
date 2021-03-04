const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
require("./routes")(app);
app.listen(3000, () => {
  console.log("server running in the port 3000");
});
