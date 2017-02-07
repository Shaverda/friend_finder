const express = require("express");
const body_parser = require("body-parser");
const p_ath = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.text());
app.use(body_parser.json({ type: "application/vnd.api+json" }));

require("./app/routing/api_routes")(app);
require("./app/routing/html_routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
