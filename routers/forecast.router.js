
var express = require('express');
var router = express.Router();
var apiKey = process.env.APIKEY || require ('../config.js').apiKey;
var axios = require('axios');
var authorize = require('../middleware/auth.js');
var timeoutConfig = {
  timeout: 2000
};
//
// router.use(authorize); //comment this part out while practicing
//
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

// router.get('/createLocation/:latlng', function(request, response){
//   var url = 'https://maps.googleapis.com/maps/api/geocode/json?&latlng=' + request.params.createLocation;
//   axios.get(url, timeoutConfig)
//   .then(function(createLocation){
//     response.json(geocode.data.results[0].formatted_address);
// })
// .catch(function(error){ //when not successful
//   response.send(error);
// });
//
// });

module.exports = router;

function buildForecastURL (latitude, longitude){
    var url = 'https://api.darksky.net/forecast/'+ apiKey +'/'+ latitude +','+ longitude;
    return url;
}

//if i type an address inside the input it should responde with the weather information.
