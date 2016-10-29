(function() {
  angular.module('weatherApp')
    .factory('weatherService', weatherService);

    weatherService.$inject = ['$http'];

    function weatherService($http){
      var secretToken = {
        secret: 'its a secret'
      };
      var longitude;
      var latitude;
      var weatherData = [];
      return {
        weatherData: weatherData,
        createLocation: createLocation
      };

      function createLocation(latitude, longitude){
        latitude = latitude;
        longitude = longitude;
        var config = {
          headers: secretToken
        };
        var url = '/forecast/'+ latitude + ',' + longitude;
        return $http.get(url, config);
      }

  }
}());
