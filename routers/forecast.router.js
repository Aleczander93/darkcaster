

var express = require('express');
var router = express.Router();
var apiKey = require ('../config.js').apiKey;
var axios = require('axios');
var timeoutConfig = {
  timeout: 2000
};

router.get('/forecast/:latitude,:longitude', function(request, response){
  var url = buildForecastURL(request.params.latitude, request.params.longitude);
  axios.get(url, timeoutConfig)
    .then(function(forecast){ //when it's successful
      response.send(forecast.data);
    })
    .catch(function(error){ //when not successful
      response.send(error);
    });
});

module.exports = router;

function buildForecastURL (latitude, longitude){
    var url = 'https://api.darksky.net/forecast/'+ apiKey +'/'+ latitude +','+ longitude;
    return url;
}
