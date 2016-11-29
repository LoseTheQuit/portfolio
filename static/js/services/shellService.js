'use strict';

console.log("OUTSIDE shellServiceData");

angular.module("shell")
    .service('dataService', function ($http) {
        console.info("INSIDE dataService");
    });
