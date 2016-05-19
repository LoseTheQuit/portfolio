'use strict';

console.log("OUTSIDE twitter directive");

angular.module("mainModule")
    .directive('werkspayce', function () {

        console.log("INSIDE twitter directive");

        return {

            templateUrl: '../templates/wkspc.html',
            replace: false
        }

    });