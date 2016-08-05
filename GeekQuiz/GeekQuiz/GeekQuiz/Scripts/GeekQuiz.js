var GeekQuiz = angular.module('GeekQuiz', ['ngRoute', 'ui.bootstrap']);

GeekQuiz.controller('LandingPageController', LandingPageController);
GeekQuiz.controller('LoginController', LoginController);
GeekQuiz.controller('RegisterController', RegisterController);

GeekQuiz.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
GeekQuiz.factory('LoginFactory', LoginFactory);
GeekQuiz.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

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
        })
        .when('/register', {
            templateUrl: 'Account/Register',
            controller : RegisterController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor')
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

GeekQuiz.config(configFunction);