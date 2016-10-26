

(function() {
  angular.module('weatherApp')
  .factory('LocationService', LocationService);

  LocationService.$inject=[];

  function LocationService(){

    var data = [
      {desc:''}
    ];
    // JSON.parse($window.localStorage.getItem('data'));
    // console.log($window.localStorage);

    return{
      get: get,
      create: create,
      update: update,
      delete: remove
    };

    function get(){
      return data;
    }
    function create(description){
      data.push({desc: description});
    }
    //   $window.localStorage.setItem('data', JSON.stringify(data));
    // }
    function update(index, newDescription){
      data.splice(index, 1, {desc: newDescription});
    }
    //   $window.localStorage.setItem('data', JSON.stringify(data));
    // }
    function remove(index){
      data.splice(index,1);
    }
    //   $window.localStorage.setItem('data', JSON.stringify(data));
    // }
  }
}());
