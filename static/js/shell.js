"use strict";

console.log("OUTSIDE: main");
const app = angular
  .module("shell", [
    "ngRoute",
    "ngMaterial",
    "ngAnimate",
    "ngAria",
    "ngMessages",
    "ngCookies",
    "ngLodash"
  ])
  .config(function ($routeProvider, $mdThemingProvider, $mdAriaProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("grey")
      .accentPalette("indigo");

    $routeProvider.when("/home", {
      templateUrl: "../templates/portfolio.html",
      controller: "rebrandController"
    });

    $routeProvider.when("/rebrand", {
      templateUrl: "../templates/rebrand.html",
      controller: "rebrandController"
    });

    $routeProvider.when("/resume", {
      templateUrl: "../templates/instagram.html",
      controller: "alloyController"
    });

    $routeProvider.otherwise({
      redirectTo: "/home",
      controller: "alloyController"
    });
  });