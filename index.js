const express = require("express");
const controller = require("./controller");
var expressLayouts = require("express-ejs-layouts");
const db = require('./db');
var app = express();

app.set("view engine", "ejs");
db.connect();
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", controller.listUser);

app.get("/add", controller.addUser);

app.post("/create-user", controller.createUser);

app.listen(3001, () => {
  console.log("App is running on the port: 3001");
});
