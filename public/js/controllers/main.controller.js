

(function(){
  angular.module('weatherApp')
  .controller('LocationController', LocationController);

    LocationController.$inject = ['$scope', 'LocationService'];

    function LocationController($scope, LocationService){
      $scope.locations = LocationService.get();
      $scope.createLocation = createLocation;
      // $scope.editLocation = editLocation;


    function createLocation (newLocationLat) {
      // LocationService.delete(newLocationLat, newLocationLon);
      LocationService.create(newLocationLat);
      $scope.newLocationLat='';
      // $scope.newlocationLon='';
    }

    // function editLocation(location){
    //   location.isBeingEdited = true;
    // }
}
}());
