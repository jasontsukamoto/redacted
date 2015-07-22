var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var redacted = require('./lib/redacted.js');

//tell express which template engine we use by npm module name
app.set('view engine', 'jade');

//tell express where our template file lives
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(redacted);


app.get('/', function(req, res) {
  res.render('contact');
});

app.post('/comments', function(req, res) {
  // console.log(req.body);
  // res.send(req.body);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});