'use strict';

console.log("OUTSIDE disasterController");

angular.module("mainModule")
    .controller('disasterController', function ($scope, disasterService) {

        console.log("INSIDE disasterController");

        disasterService.getDangerJSON(function (response) {

            var data = response.data;
            // console.log(data);
            $scope.dangerData = data;

            // for (var key in data) {

            //     console.log("key: " + key[0]);
            //     console.log("data: " + key + " = " + data[key]);

            //  }

        });

        disasterService.getDangerImage('catoosa', function (response) {

            var data = response.data;
            console.log(data);
            $scope.dangerDataImage = data;

            // for (var key in data) {

            //     console.log("key: " + key[0]);
            //     console.log("data: " + key + " = " + data[key]);

            //  }

        });


    });