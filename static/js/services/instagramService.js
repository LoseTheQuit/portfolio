'use strict';

console.log("OUTSIDE dataService");

angular.module("mainModule")
    .service('instagramService', function ($http) {

        console.log("INSIDE dataService");
        // REST CALLS TO EVOKE RESONSE OBJECTS
        this.tapInsta = function (access_token, callback) {

            $http({
                method: 'POST',
                url: '/ig',
                data: {
                    token: access_token
                }
            })

            .then(callback);
        }

        this.tapInstaExtended = function (access_token, instaQuery, callback) {

            $http({
                method: 'POST',
                url: '/instaInputQuery',
                data: {
                    token: access_token,
                    query: instaQuery
                }
            })

            .then(callback);
        }

        this.getHandleAuth = function (callback) {


            $http({
                method: 'GET',
                url: '/handleauth',
                data: {
                    name: "LTQ"
                }
            })

            .then(callback);

        }

        this.getWindowInfo = function () {
            /////////////////////
            var windowLocation = window.location.href;
            // THIS FIRST CHECKS WHETHER LOSE THE QUIT IS IN THE URL
            // IF SO/IF NOT - PARSE THE AUTH CODE AND SEND IT TO THE SERVER
            if (windowLocation.indexOf("losethequit") != -1) {
                var windowLocationWithToken = windowLocation.replace("http://losethequit.me/views/werkspayce.html?code=", "");
                console.log('window location: ' + "http://losethequit.me/views/werkspayce.html?code=")
            } else {
                var windowLocationWithToken = windowLocation.replace("http://localhost:5000/views/werkspayce.html?code=", "");
                console.log('window location: ' + "http://localhost:5000/views/werkspayce.html?code=")
            }
            /////////////////////
            return windowLocationWithToken;

        };

    });