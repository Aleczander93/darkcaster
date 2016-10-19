var express = require('express');
var index = express.Router();



index.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root:__dirname});
});

module.exports = index;
