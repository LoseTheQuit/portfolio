'use strict';

console.log("OUTSIDE disasterService");

angular.module("mainModule")
    .service('disasterService', function ($http) {
        console.log("INSIDE disasterService");

        this.getDangerJSON = function (callback) {

            $http.get('../mock/danger.json')

            .then(callback);
        };

        //this.getDangerStormImage = function (callback) {
        //$http.get('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=fuzzy%20monkey')
        //.then(callback);
        //};

        this.getDangerImage = function (whichStorm, callback) {

            $http({
                method: 'POST',
                url: '/emcien',
                data: {
                    storm: whichStorm,

                }
            })

            .then(callback);
        }

    });