'use strict';

console.log("INSIDE sideBarService");

angular.module("mainModule")
    .service('sidebarService', function ($http) {
        console.log("INSIDE sideBarService");

        var getTwitterDropDownNumber = 1;

        this.getTwitterDropDownNumberIndex = function () {

            return getTwitterDropDownNumber;
        };

        this.setTwitterDropDownNumberIndex = function (index) {

            getTwitterDropDownNumber = index;
        };

        this.getTwitterData = function (inputSearchQuery, callback) {

            console.log(getTwitterDropDownNumber);
            console.log(getTwitterDropDownNumber);
            console.log(getTwitterDropDownNumber);
            console.log(getTwitterDropDownNumber);
            console.log(getTwitterDropDownNumber);
            console.log(getTwitterDropDownNumber);
            console.log(getTwitterDropDownNumber);

            switch (getTwitterDropDownNumber) {

            case 1:

                $http({
                    url: '/userTimeLineQuery',
                    method: "POST",
                    data: {

                        screen_name: inputSearchQuery,
                        count: 10

                    }
                })

                .then(callback);

                break;
            case 2:

                $http({
                    url: '/searchTweetsQuery',
                    method: "POST",
                    data: {

                        q: inputSearchQuery,
                        count: 10

                    }
                })

                .then(callback);

                break;
            case 3:
                alert('PUT SOMETHING HERE')
                break;
            default:

            }

        };


    });