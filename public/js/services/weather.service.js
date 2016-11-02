(function() {
  angular.module('weatherApp')
    .factory('weatherService', weatherService);

    weatherService.$inject = ['$http'];

    function weatherService($http){
      var secretToken = {
        secret: 'its a secret'
      };

      var lat;
      var lon;
      var service = {};
      service.weatherData = [];
      service.getWeather = getWeather;
      service.getMinutely = getMinutely;
      return service;

      function getWeather(latitude, longitude){
        lat = latitude;
        lon = longitude;
        var config = {
          headers: secretToken
        };

        var url = '/forecast/'+ latitude + ',' + longitude;
        return $http.get(url, config)
            .then(function(response){
              
              service.weatherData = response.data;
            });
      }

      function getMinutely(latitude, longitude){
        lat = latitude;
        lon = longitude;
        var config = {
          headers: secretToken
        };

        var url = '/forecast/'+ latitude + ',' + longitude;
        return $http.get(url, config)
            .then(function(response){
              service.weatherData = response.data;
            });
      }

  }
}());
