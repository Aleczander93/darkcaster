var express = require ('express');
var server = express();
var logger = require('./middleware/logger.js');
var cors = require('cors');
var apiKey = require ('./config.js').apiKey;

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));
server.use(logger);
server.use(cors());
var axios = require('axios');

server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root:__dirname});
});

server.get('/forecast/:latitude,:longitude', function(request, response){
  var url = 'https://api.darksky.net/forecast/'+ apiKey +'/'+ request.params.latitude +','+ request.params.longitude;
  var timeoutConfig = {
    timeout: 2000
  };
  axios.get(url, timeoutConfig)
    .then(function(forecast){ //when it's successful
      response.send(forecast.data);
    })
    .catch(function(error){ //when not successful
      response.send(error);
    });
});

server.listen(port, function(){
  console.log('Now listenting on port...', port);
});
