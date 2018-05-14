var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('./app_welcome');
});

app.get('/login', function(req, res) {
  res.render('./content');
});

app.listen(3000);
