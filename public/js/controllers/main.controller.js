

(function(){
  angular.module('weatherApp', [])
  .controller('LocationController', LocationController);

    LocationController.$inject = ['$scope', '$http'];

    function LocationController($scope, $http){
      // $scope.locations = LocationService.get();
      $scope.createLocation = createLocation;
      // $scope.editLocation = editLocation;

    function createLocation (newLocationLat, newLocationLng) {
      // LocationService.delete(newLocationLat, newLocationLon);
      console.log(newLocationLat, newLocationLng);
      // LocationService.create(newLocationLat);
      // $scope.newLocationLat='';
      // $scope.newlocationLon='';
    }

    $http({
      method: 'GET',
      url: '/createLocation/:latlng'
    }).then(function successCallback(response){
      $scope.createLocation = response.data;
    }, function errorCallback(response) {
    });

    // function editLocation(location){
    //   location.isBeingEdited = true;
    // }
}
}());
