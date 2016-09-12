'use strict';

console.log("OUTSIDE jumbotron");


angular.module("mainModule")
    .directive('jumbotron', function () {
        console.log("INSIDE jumbotron");

        return {

            templateUrl: '/templates/jumbotron.html',
            controller: 'alloyController',
            replace: false
        }

    });
