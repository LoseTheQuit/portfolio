'use strict';

console.log("OUTSIDE disasterNavDirective");

angular.module("mainModule")
    .directive('sticky', function () {

        console.log("INSIDE disasterNavDirective");

        return {
            templateUrl: '/templates/dangerNav.html',
            controller: 'disasterNavController',
            replace: false
        }

    });