'use strict';

console.log("OUTSIDE sidebarController");

angular.module("mainModule")
    .controller('sidebarController', function ($scope, sidebarService) {
        console.log("INSIDE sidebarController");

        $scope.getTwitterDropDownNumber = 1;

        $scope.getTwitterDropDownText = function (menuOptionNumber) {

            sidebarService.setTwitterDropDownNumberIndex(menuOptionNumber);

            $scope.getTwitterDropDownNumber = menuOptionNumber;

            switch (menuOptionNumber) {

            case 1:
                return 'user timeline';
                break;
            case 2:
                return 'search tweets'
                break;
            case 3:
                return 'coming soon'
                break;
            default:

            }

        };


    });