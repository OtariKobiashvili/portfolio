var express = require("express");
var app = express();
var port = process.env.PORT || 3001;

require('dotenv').config();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(function(req,res,next){
  res.locals.analyticsID = process.env.ANALYTICS_ID;
  next();
});

app.get("/", function(req,res){
  res.render("portfolio");
});

app.get("*", function(req,res) {
  res.redirect("/");
});

app.listen(port, function(){
  console.log("Portfolio App is now running on Port " + port);
});
