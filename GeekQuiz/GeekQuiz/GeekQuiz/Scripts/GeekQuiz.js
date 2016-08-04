var GeekQuiz = angular.module('GeekQuiz', [ 'ngRoute' ]);

GeekQuiz.controller('LandingPageController', LandingPageController);
GeekQuiz.controller('LoginController', LoginController);

GeekQuiz.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/One'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return 'routesDemo/Two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/Three'
        })
        .when('/login', {
            templateUrl: 'Account/Login',
            controller : LoginController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor')
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

GeekQuiz.config(configFunction);