(function(){
  angular.module('weatherApp')
  .controller('hourlyController', hourlyController);

  hourlyController.$inject = ['$scope', 'weatherService'];

  function hourlyController($scope, weatherService){
    $scope.getHourly = getHourly;
    $scope.weather = weatherService.weatherData;

  $scope.$watch(function(){
    return weatherService.weatherData;
  },  function(newVal, oldVal){
    $scope.weather = weatherService.weatherData;
  });

  function getHourly(latitude, longitude) {
      weatherService.getHourly(latitude, longitude);
    }

  }
}());
