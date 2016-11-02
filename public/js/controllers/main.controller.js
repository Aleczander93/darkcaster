

(function(){
  angular.module('weatherApp')
  .controller('LocationController', LocationController);

    LocationController.$inject = ['$scope', 'weatherService'];

    function LocationController($scope, weatherService){
      $scope.getWeather = getWeather;
      $scope.weather = weatherService.weatherData;


    $scope.$watch(function(){
      return weatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = weatherService.weatherData;
    });

    function getWeather (latitude, longitude) {
        weatherService.getWeather(latitude, longitude);
    }

  }
}());
