var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'jade');
app.set('views', './views');
app.set('view options', { pretty: true });
app.get('/form', function(req, res) {
  res.render('form');
});
app.get('/form_receiver', function(req, res){
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + ',' + description);
});
app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + ',' + description);
});
app.get('/topic/:id', function(req, res) {
  var topics = [
    'gunny',
    'YJ',
    'Jay',
    'Mingyu'

  ];
  var output  = `
  <a href="/topic?id=0">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br>
  ${topics[req.query.id]}
  `
  res.send(output);
});
app.get('/topic/:id/:mode', function(req, res) {
  res.send(req.params.id + ',' + req.params.mode);
});
app.get('/', function(req, res){
  res.send('Hello home page');
});
app.get('/template', function(req, res) {
  res.render('temp');
});
app.get('/dynamic', function(req, res) {
  var time = Date();
  var output = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
      Hello Dynamic!
      ${time};
  </body>
</html>`
    res.send(output);
});
app.get('/router', function(req, res){
    res.send('Hello Router, <img src="/itsallgoodman.jpg">')
})
app.get('/login', function(req, res){
  res.send('<h1>Login please<h1>');
});
app.get('/mypage', function(req,res){
  res.send('this is my page');
});
app.listen(3000, function() {
  console.log('Connected to 3000 port!');
})

