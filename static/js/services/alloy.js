'use strict';

console.log("OUTSIDE alloy");

angular.module("mainModule")
    .service('alloy', function ($http) {
        console.log("alloy initialized!");

        this.helloConsole = function () {

            console.info("INSIDE alloy");

        };

        this.getSpotify = function (params, callback) {
            console.log("success from getSpotify");
            console.log(params);

            $http({
                url: '/spotify',
                method: "GET"
            })

            .then(callback);

            // console.log('q: ' + params.q)

        };


        this.getSpotifyDATA = function (params, callback) {
            console.log("success from getSpotify");
            console.log(params);

            $http({
                url: '/spotify-input-query',
                method: "POST",
                data: params
            })

            .then(callback);

            console.log('q: ' + params.q)

        };


        this.doSomethingExtended = function (params, callback) {
            console.log("success from doSomethingExtended");
            console.log(params);

            $http({
                url: 'http://go.medassets.com/RB-CO-5-1-2-LP.html',
                method: "GET"
            })

            .then(callback);

        };



    });