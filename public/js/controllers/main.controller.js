

(function(){
  angular.module('weatherApp')
  .controller('LocationController', LocationController);

    LocationController.$inject = ['$scope', 'weatherService'];

    function LocationController($scope, weatherService){
      // $scope.locations = LocationService.get();
      $scope.createLocation = createLocation;
      // $scope.editLocation = editLocation;
      $scope.weather = weatherService.weatherData;
    

    $scope.$watch(function(){
      return weatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = weatherService.weatherData;
    });

    function createLocation (latitude, longitude) {
        weatherService.createLocation(latitude, longitude);
    }
    // function log(){
    //   console.log(weatherService.weatherData);
    // }
  }
}());

    // $http({
    //   method: 'GET',
    //   url: '/createLocation/:latlng'
    // }).then(function successCallback(response){
    //   $scope.createLocation = response.data;
    // }, function errorCallback(response) {
    // });
