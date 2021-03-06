var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("search");
});

app.get("/results", function (req, res) {
  var query = req.query.search;
  request("<INSERT API KEY HERE>", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("results", { data: data });
    } else {
      res.send("Nothing found");
    }
  });
});

app.get("*", function (req, res) {
  res.send("Nothing Found");
});

app.listen(3000, process.env.IP, function () {
  console.log("Movie App has started!");
});
