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

// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!
// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!
// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// console.log(__dirname);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
// =============================================================
// var survey_data = [{"timestamp":"1564063366166","data":[{"pergunta":"Tive dificuldade de me acalmar","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Minha boca ficou seca","classe":"a","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Não tive nenhum sentimento positivo","classe":"d","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Tive dificuldade de respirar","classe":"a","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Não tinha iniciativa para fazer as coisas","classe":"d","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Exagerei na reação em algumas situações","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Tive tremedeira","classe":"a","resposta":{"escolha":"r2","valor":"2"}},{"pergunta":"Senti que estava sempre nervoso(a)","classe":"s","resposta":{"escolha":"r3","valor":"3"}},{"pergunta":"Fiquei preocupado(a) e pensando que poderia entrar em pânico","classe":"a","resposta":{"escolha":"r2","valor":"2"}},{"pergunta":"Senti que não tinha vontade de nada ","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Senti que estava agitado(a)","classe":"s","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Tive dificuldade de relaxar","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Senti que estava triste e sem motivação","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Não consegui tolerar as coisas e as pessoas que ficavam me atrapalhando","classe":"s","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Eu senti que ia entrar em pânico","classe":"a","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Nada me deixou entusiasmado(a) ou animado(a)","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Eu senti que era uma pessoa sem valor","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Eu estava sensível e emotivo(a)","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Eu senti meu coração acelerar e/ou apertar","classe":"a","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Eu senti medo sem motivo","classe":"a","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Senti que a vida não tinha sentido","classe":"d","resposta":{"escolha":"r1","valor":"1"}}],"score":{"depression":"10","anxiety":"16","stress":"14"},"limite_inf":{"depression":{"extrema":"28","severa":"21","moderada":"14","suave":"10"},"anxiety":{"extrema":"20","severa":"15","moderada":"10","suave":"8"},"stress":{"extrema":"34","severa":"26","moderada":"19","suave":"15"}}},{"timestamp":"1564063404986","data":[{"pergunta":"Tive dificuldade de me acalmar","classe":"s","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Minha boca ficou seca","classe":"a","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Não tive nenhum sentimento positivo","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Tive dificuldade de respirar","classe":"a","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Não tinha iniciativa para fazer as coisas","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Exagerei na reação em algumas situações","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Tive tremedeira","classe":"a","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Senti que estava sempre nervoso(a)","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Fiquei preocupado(a) e pensando que poderia entrar em pânico","classe":"a","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Senti que não tinha vontade de nada ","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Senti que estava agitado(a)","classe":"s","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Tive dificuldade de relaxar","classe":"s","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Senti que estava triste e sem motivação","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Não consegui tolerar as coisas e as pessoas que ficavam me atrapalhando","classe":"s","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Eu senti que ia entrar em pânico","classe":"a","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Nada me deixou entusiasmado(a) ou animado(a)","classe":"d","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Eu senti que era uma pessoa sem valor","classe":"d","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Eu estava sensível e emotivo(a)","classe":"s","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Eu senti meu coração acelerar e/ou apertar","classe":"a","resposta":{"escolha":"r1","valor":"1"}},{"pergunta":"Eu senti medo sem motivo","classe":"a","resposta":{"escolha":"r0","valor":"0"}},{"pergunta":"Senti que a vida não tinha sentido","classe":"d","resposta":{"escolha":"r1","valor":"1"}}],"score":{"depression":"12","anxiety":"4","stress":"6"},"limite_inf":{"depression":{"extrema":"28","severa":"21","moderada":"14","suave":"10"},"anxiety":{"extrema":"20","severa":"15","moderada":"10","suave":"8"},"stress":{"extrema":"34","severa":"26","moderada":"19","suave":"15"}}}];
// var survey_data = [];

const instagram = require("user-instagram-profile")

app.get("/api/instagram", function (req, res) {

  instagram("https://www.instagram.com/melhorterapia")
    .then(data => {
      // console.log(data)
      return res.json(data);
    })
    .catch(e => {
      // Error will trigger if the account link provided is false.
      // console.error(data)
      return;
    })
});



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

app.get("/survey", function (req, res) {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "web", "survey.html"));
});

// app.get("/api/survey", function (req, res) {
//   return res.json(survey_data);
// });


// Save a reference to the Schema constructor
var MongoClient = require('mongodb').MongoClient;
var database_name = "mt_databasePROD";
var url = "mongodb+srv://mt_username:mt_password@cluster0-hzcwi.mongodb.net/" + database_name + "?retryWrites=true&w=majority";


app.post("/api/survey/new", function (req, res) {
  var data = req.body.resultados;
  // console.log("survey Data:");
  // console.log(data);
  // survey_data.push(data);

  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("mt_databasePROD");
      var myobj = data;
      dbo.collection("mt_collection").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("data inserted");
        db.close();
      });
    });

})


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
