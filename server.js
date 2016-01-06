var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');
var morgan = require('morgan');
var app = express();

mongoose.connect('mongodb://admin:12345@ds045882.mongolab.com:45882/cats');

app.use(express.static(path.join(__dirname, '/'))); //

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(methodOverride());


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

var enemySchema = mongoose.Schema({
  name: String,
  pic: String,
  description: String,
});
var Enemy = mongoose.model('Enemy', enemySchema);

app.get('/api/enemies', function(req, res) {
  Enemy.find(function(err, enemies) {
    if (err)
      res.send(err);

    res.json(enemies);
  });
});

app.get('/api/enemies/:id', function(req, res) {
  Enemy.findOne({
    _id: req.params.id
  }, function(err, cat) {
    if (err)
      res.send(err);

    // _id : req.params.id
    res.json(cat);
  });
});

app.post('/api/enemies', function(req, res) {
  Enemy.create({
    name: req.body.name,
    pic: req.body.pic,
    count: 0,
    viewed: false
  }, function(err, cat) {
    if (err)
      res.send(err);
    Enemy.find(function(err, enemies) {
      if (err)
        res.send(err);
      res.json(enemies);
    });
  });
});

app.delete('/api/enemies/:enemy_id', function(req, res) {
  Enemy.remove({
    _id: req.params.enemy_id
  }, function(err, cat) {
    if (err)
      res.send(err);
    Enemy.find(function(err, enemies) {
      if (err)
        res.send(err);
      res.json(enemies);
    });
  });
});
