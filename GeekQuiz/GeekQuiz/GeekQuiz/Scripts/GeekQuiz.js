var GeekQuiz = angular.module('GeekQuiz', [ 'ngRoute' ]);

GeekQuiz.controller('LandingPageController', LandingPageController);
GeekQuiz.controller('LoginController', LoginController);
GeekQuiz.controller('RegisterController', RegisterController);

GeekQuiz.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
GeekQuiz.factory('LoginFactory', LoginFactory);

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
        })
        .when('/register', {
            templateUrl: 'Account/Register',
            controller : RegisterController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor')
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

GeekQuiz.config(configFunction);