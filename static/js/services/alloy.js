'use strict';

console.log("OUTSIDE alloy");

angular.module("mainModule")
    .service('alloy', function ($http) {
        console.log("alloy initialized!");

        this.helloConsole = function () {

            console.info("INSIDE alloy");

        };

        this.getTwitter = function (callback) {

            $http({
                url: '/userTimeLineQuery',
                method: "POST",
                data: {
                    screen_name: 'hashtags',
                    count: 10
                }
            })

            .then(callback);

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

    });
