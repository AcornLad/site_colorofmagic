var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/WorldSim', function(req,res){
  res.sendFile(__dirname + '/view/WorldSim.html');
});

http.listen(3000, function(){
  console.log('Listening on *:3000');
});
