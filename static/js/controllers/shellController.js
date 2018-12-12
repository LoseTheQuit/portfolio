'use strict';

console.log("outer shellController");

angular.module("shell")
    .controller('shellController', function ($scope, shellService) {

        console.log("shellController initialized!");
        $scope.trafficSpy = function (x) {

            var dataToSend = {}

            $.get('https://api.ipify.org?format=json', function (data, error) {

                dataToSend.site = "LTQ";
                dataToSend.ip = data.ip
                dataToSend.referrer = document.referrer
                dataToSend.vendor = navigator.vendor
                dataToSend.userAgent = navigator.userAgent
                dataToSend.platform = navigator.platform
                dataToSend.language = navigator.language
                dataToSend.hostname = window.location.hostname


                if (document.referrer) {
                    dataToSend.referrer = document.referrer
                } else {
                    dataToSend.referrer = "Direct"
                }

                // if (error === 'success') {
                // if (error === 'success' && window.location.hostname !== 'localhost') {
                if (error === 'success') {

                    console.log(`traffic-spy`);
                    console.log(error);

                    shellService.trafficSpy(dataToSend, function (response) {
                        console.log(response)

                    });
                }
            });



        };

        $scope.trafficSpy();
    });