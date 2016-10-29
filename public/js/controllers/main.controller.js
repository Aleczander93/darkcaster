

(function(){
  angular.module('weatherApp')
  .controller('LocationController', LocationController);

    LocationController.$inject = ['$scope', 'weatherService'];

    function LocationController($scope, weatherService){
      // $scope.locations = LocationService.get();
      $scope.createLocation = createLocation;
      // $scope.editLocation = editLocation;

    function createLocation (latitude, longitude) {
      weatherService.createLocation(latitude, longitude)
      .then(function(response){
        $scope.weather = response.data;
        // debugger;
      });
    }

    }
    }());

    // $http({
    //   method: 'GET',
    //   url: '/createLocation/:latlng'
    // }).then(function successCallback(response){
    //   $scope.createLocation = response.data;
    // }, function errorCallback(response) {
    // });
