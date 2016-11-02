(function(){
  angular.module('weatherApp')
  .controller('minutelyController', minutelyController);

  minutelyController.$inject = ['$scope', 'weatherService'];

  function minutelyController($scope, weatherService){
    $scope.getMinutely = getMinutely;
    $scope.weather = weatherService.weatherData;

  $scope.$watch(function(){
    return weatherService.weatherData;
  },  function(newVal, oldVal){
    $scope.weather = weatherService.weatherData;
  });

  function getMinutely (latitude, longitude) {
      weatherService.getMinutely(latitude, longitude);
    }

  }
}());
