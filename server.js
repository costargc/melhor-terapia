// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "web")));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// console.log(__dirname);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "web", "home.html"));
});

app.get("/terapias", function (req, res) {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "web", "terapias.html"));
});

app.get("/trabalhe-conosco", function (req, res) {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "web", "colabore.html"));
});

app.get("*", function (req, res) {
  // console.log(res.req._parsedOriginalUrl.pathname);
  var mypath = { pathname: res.req._parsedOriginalUrl.pathname };
  res.status(404);
  // res.sendFile(path.join(__dirname, "web", "404.html"));
  res.render("404", mypath);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
