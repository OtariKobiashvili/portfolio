var express = require("express");
var app = express();
var port = process.env.PORT || 3001;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("portfolio");
});

app.get("*", function(req,res) {
  res.redirect("/");
});

app.listen(port, function(){
  console.log("Portfolio App is now running on Port " + port);
});
