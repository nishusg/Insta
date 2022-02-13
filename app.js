var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nishu:nishu@gallery.wfxdb.mongodb.net/insta?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
var User = require("./models/login");

app.get("/", (req, res) => {
  res.render("register");
});

app.post("/", (req, res) => {

  User.create(req.body, function (err, user) {

    if (err) {
      return res.render("register");
    }
    res.send("Successfully login wait for few minutes...");
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started.......");
});
