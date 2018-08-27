'use strict';

console.log("OUTSIDE shellServiceData");

angular.module("shell")
    .service('shellService', function ($http) {
        console.info("INSIDE shellServiceData");

        this.trafficSpy = function (params, callback) {
            $http({
                // url: '/traffic-spy',
                url: 'https://trafficspy-api.herokuapp.com/traffic-spy',
                // url: 'http://localhost:8525/traffic-spy',
                method: "POST",
                data: params
            }).then(callback);

        };
    });