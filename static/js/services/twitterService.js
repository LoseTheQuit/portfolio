'use strict';

console.log("OUTSIDE twitterService");

angular.module("mainModule")
    .service('twitterService', function ($http) {

        console.log("INSIDE twitterService");

    });
