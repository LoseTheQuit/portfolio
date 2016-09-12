'use strict';

console.log("OUTSIDE fpService");

angular.module("mainModule")
  .service('fpService', function($http) {
    console.log("INSIDE fpService");
    this.getData = function(callback) {

      $http({
        method: 'GET',
        url: '/data',
      })

        .then(callback);
    }
    this.getDataOther = function(callback) {

      $http({
        url: '/userTimeLineQuery',
        method: "POST",
        data: {

          screen_name: 'djenvy',
          count: 10

        }
      })

        .then(callback);
    }


  });
