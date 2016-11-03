(function(){
  angular.module('weatherApp')
    .controller('minutelyController', minutelyController);

  minutelyController.$inject = ['$scope', 'weatherService'];

  function minutelyController($scope, weatherService){
    $scope.minuteLat = weatherService.lat;
    $scope.minuteLon = weatherService.lon;
    $scope.weather = weatherService.weatherData;

  $scope.$watch(function(){
    return weatherService.weatherData;
  },  function(newVal, oldVal){
    $scope.weather = weatherService.weatherData;
    $scope.minuteLat = weatherService.lat;
    $scope.minuteLon = weatherService.lon;
  });
}

}());
