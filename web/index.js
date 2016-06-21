var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var app = express();
var config = require('./config')
//To grab data from POST
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(__dirname));
//Setting up morgan to log every request
app.use(morgan('dev'));
//Connecting to DB
mongoose.connect(config.DATABASE);
//Root of webpage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Endpoints
var pokedexApi = require('./server/routes/pokedexApi')(express);
app.use(pokedexApi);
//Listen
var server = app.listen(config.PORT, function(){
  console.log('Server Running on: ' + config.PORT);
});
