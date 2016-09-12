'use strict';
console.log("OUTSIDE fpDirective");
angular.module("mainModule")

.directive('fp', function () {

    console.log("INSIDE fpDirective");
    return {
        templateUrl: '../templates/fp.html',
        controller: 'fpController',
        replace: false
    }

});
