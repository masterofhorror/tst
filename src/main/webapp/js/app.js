'use strict';

// Declare app level module which depends on filters, and services
var module = angular.module('LtcApp', [
    'ngRoute'
]);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
