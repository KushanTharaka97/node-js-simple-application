const express = require("express");

var expressLayouts = require("express-ejs-layouts");

var app = express();

app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", (req, res) => {
//   res.render("index");
  res.render("index");
});

app.get("/add", (req, res)=>{
    console.log("adding people");
    res.render("add");
})

app.listen(3001, () => {
  console.log("App is running on the port: 3001");
});
