

(function(){
  angular.module('weatherApp')
  .controller('LocationController', LocationController);

    LocationController.$inject = ['$scope'];

    function LocationController($scope){
      // $scope.locations = LocationService.get();
      $scope.createLocation = createLocation;
      // $scope.editLocation = editLocation;

    function createLocation (newLocationLat, newLocationLon) {
      // LocationService.delete(newLocationLat, newLocationLon);
      console.log(newLocationLat, newLocationLon);
      // LocationService.create(newLocationLat);
      // $scope.newLocationLat='';
      // $scope.newlocationLon='';
    }

    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?&latlng='
    }).then(function successCallback(response){

    }, function errorCallback(response) {

    });

    // function editLocation(location){
    //   location.isBeingEdited = true;
    // }
}
}());
