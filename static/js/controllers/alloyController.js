'use strict';

console.log("OUTSIDE alloyController");

angular.module("mainModule")
    .controller('alloyController', function ($scope, instagramService, twitterService, sidebarService, alloy) {

        console.log("INSIDE alloyController");

       // THIS WILL BE USED TO SWIPE BETWEEN SOCIAL PLATFORMS

        $scope.onSwipeLeft = function (ev) {
            alert('You swiped left!!');
        };
        $scope.onSwipeRight = function (ev) {
            alert('You swiped right!!');
        };

        // THE INSTAGRAM SERVICE MTHOD IS USED TO SNATCH T
        // HE URL FROM BROWSER WIDNOW AND PARSE IT FOR LATER USE
        
        $scope.windowInfoWithToken = instagramService.getWindowInfo();
        // THIS GRABS THE INDEX OF THE MENU ITEM SELECTED
        $scope.getTwitterDropDownNumberIndex = sidebarService.getTwitterDropDownNumberIndex();


        // THIS IS THE GRAND SEARCH METHOD - PINGING THE THREE MAJOR API'S I'M WORKING WITH
        $scope.getIgandTwitterApiData = function () {

            if ($scope.inputSearchTweetsAndInstagramQuery.length >= 1) {

               // THE PARSED TOKEN PLUS THE QUERY IS SENT TO THE SERIVCE WHICH THENS MAKES A REST CALL TO THE BACK END
               // A CALL BACK IS PASSED TO RECEIVE THE DATA SENT BACK FROM THE BACK END - WE SET THE RESPONCE TO INSTAGRAMDATA
                instagramService.tapInstaExtended($scope.windowInfoWithToken, $scope.inputSearchTweetsAndInstagramQuery, function (response) {

                    // console.info(response.data);
                    // INSTAGRAMDATA IS USED IN THE VIEW TO PRESENT DATA
                    $scope.instagramData = response.data;

                });

                // SENDING THE QUERY AND THE MAXIMUM I'D LIKE TO RECEIVE BACK
                // PLUS A CALLBACK TO HANDLE THE RESPONSE OBJECT
                alloy.getSpotifyDATA({

                    q: $scope.inputSearchTweetsAndInstagramQuery,
                    count: 20

                }, function (response) {

                    // SPOTIFYDATA IS USED IN THE VIEW TO PRESENT DATA
                    $scope.spotifyData = response.data;

                    console.log("_________________________________");
                    console.log("SPOTIFY response.DATA: ");
                    console.info(response.data);
                    console.log("SPOTIFY response: ");
                    console.info(response);
                    console.log("_________________________________");

                });

                sidebarService.getTwitterData($scope.inputSearchTweetsAndInstagramQuery, function (response) {

                    // for user timelines   var tweets = response;
                    // for tags var tweets = response.data;

                    // THIS IS WHERE SOME OF THE SIDEBAR DROPDOWN LOGIC LIVES.
                    // SWITCH CASE - FOR MORE OPTIONS

                    var tweets = response;
                    if (sidebarService.getTwitterDropDownNumberIndex() === 1) {
                        tweets = response;
                    } else {
                        tweets = response.data;
                    }

                    console.log(tweets);
                    // TWITTER DATA USED TO PAINT THE CANVAS
                    $scope.twitterData = tweets;

                });
            }

        };

        // THIS WAS USED TO DO A GET REQUEST WHEN AN INSTAGRAM HASHTAG LINK WAS CLICKED
        $scope.tagQuery = function (instaQuery) {
            // TOKEN + QUERY + CALLBACK = RESPONSE OBJECT
            instagramService.tapInstaExtended($scope.windowInfoWithToken, instaQuery, function (response) {

                $scope.instagramData = response.data;

            });

        };

        // USED TO DO A GET REQUEST WHEN A TWITTER HASHTAG LINK WAS PRESSED
        $scope.twitterTagQuery = function (twitterTagSearch) {
            sidebarService.setTwitterDropDownNumberIndex(2);
            // TWITTER DOESN'T ALWAYS NEED A TOKEN TO AUTHENTICATE - THEY JUST NEED THE QUERY
            sidebarService.getTwitterData(twitterTagSearch, function (response) {

                // for user timelines   var tweets = response;
                // for tags var tweets = response.data;

                var tweets = response;
                // USED TWICE FOR TESTING
                tweets = response.data;
                console.log("_________________________________");
                console.log("twitterTagQuery response.DATA: ");
                console.info(response.data);
                console.log("_________________________________");
                $scope.twitterData = tweets;

            });

        };

        // USED TO QUERY THE BACK END WHEN THE TWITTER USERNAME WAS PREESSED - FOR THAT USER'S DATA
        $scope.twitterUserNameQuery = function (twitterTagSearch) {
            sidebarService.setTwitterDropDownNumberIndex(1);

            sidebarService.getTwitterData(twitterTagSearch, function (response) {

                // for user timelines   var tweets = response;
                // for tags var tweets = response.data;

                var tweets = response;

                console.log("_________________________________");
                console.log("twitterTagQuery response.DATA: ");
                console.info(response.data);
                console.log("_________________________________");
                $scope.twitterData = tweets;

            });

        };

        $scope.hideThisDiv = false;

        // CUSTOM CSS TO HIDE THE SCROLL BEFORE BEFORE THE DASHBOARD IS VISISBLE

        $scope.customOverFlow = function (value) {

            if ($scope.hideThisDiv) {

                return {
                    "overflow": 'auto'
                }

            } else {

                return {
                    "overflow": 'hidden'
                }

            }
        }


        // DEPRECATED - USED AS REFERENCE
        $scope.changeThisSearchTweets = function () {

            alloy.getTwitterAndInstagramDataByTags({

                q: $scope.inputSearchTweetsAndInstagramQuery,
                count: 25

            }, function (response) {

                var tweets = response.data;
                console.log(tweets);
                $scope.twitterData = tweets;
            });

        };

        // THE METHODS ABOVE ARE TRIGGERED WHEN THE STATE OF THE VIEW IS CHANGES
        // THIS METHODS LOAD WHEN THE VIEW INITIALLY LOADS
        // THE WORK VERY SIMILAR TO THE METHODS ABOVE - ASSIGNED THE RESPONSE
        // OBJECT TO A SCOPE VARIABLE USED TO RENDER DATA TO THE VIEW

        alloy.getTwitter(function (response) {

            var tweets = response.data;
            console.log(tweets);
            console.log($scope.hideThisDiv);
            $scope.twitterData = {};
            $scope.twitterData.data = tweets;

        });

        alloy.getSpotify($scope.windowInfoWithToken, function (response) {

            $scope.spotifyData = response.data;
            console.info('getSPOTIFY:');
            console.info(response.data);
            console.info('getSPOTIFY:');

        });

        instagramService.tapInsta($scope.windowInfoWithToken, function (response) {

            $scope.instagramData = response.data;

            // debugger;

            // IF THE TOKEN IS NOT UNDEFINED - ASSIGN THE VALUE TO A SCOPE VARIABLE
            // IF NOT DO NOT SHOW THE DASHBOARD
            if (!response.data.access_token == undefined) {

                $scope.instagramDataWithToken = response.data.access_token;

            } else {
                $scope.hideThisDiv = true;
            }

            console.warn('tapInsta:');
            console.info(response.data);
            console.warn('tapInsta:');

        });

        // TRYING TO SHOW OFF THE APP WITHOUT HAVING TO AUTHENTICATE
        $scope.forLizz = function () {
            $scope.hideThisDiv = true;
        }


    });
