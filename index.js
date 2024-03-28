const express = require("express");

var expressLayouts = require("express-ejs-layouts");

var app = express();

app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index");
  // res.send("Hi test");
});

app.listen(3001, () => {
  console.log("App is running on the port: 3001");
});
