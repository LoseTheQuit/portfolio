'use strict';

console.log("OUTSIDE disasterNavController");

angular.module("mainModule")
    .controller('disasterNavController', function ($scope, disasterNavService) {
        console.log("INSIDE disasterNavController");
    });
