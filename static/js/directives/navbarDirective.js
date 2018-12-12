'use strict';
console.log("outer portfolio directive");
angular.module("shell")

    .directive('navbar', function () {
        console.log("navbar directive initialized!");
        return {
            templateUrl: '../components/navbar.html',
            controller: 'shellController',

            replace: false
        }

    });