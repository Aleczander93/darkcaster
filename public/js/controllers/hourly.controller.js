(function(){
  angular.module('weatherApp')
    .controller('hourlyController', hourlyController);

  hourlyController.$inject = ['$scope', 'weatherService'];

  function hourlyController($scope, weatherService){
    $scope.hourLat = weatherService.lat;
    $scope.hourLon = weatherService.lon;
    $scope.weather = weatherService.weatherData;

  $scope.$watch(function(){
    return weatherService.weatherData;
  },  function(newVal, oldVal){
    $scope.weather = weatherService.weatherData;
    $scope.hourLat = weatherService.lat;
    $scope.hourLon = weatherService.lon;
  });
}
}());
