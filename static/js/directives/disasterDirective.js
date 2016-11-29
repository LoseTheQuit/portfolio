'use strict';

console.log("OUTSIDE disasterDirective");

angular.module("mainModule")
    .directive('danger', function () {

        console.log("INSIDE disasterDirective");

        return {
            templateUrl: '/templates/danger.html',
            controller: 'disasterController',
            replace: false
        }

    });