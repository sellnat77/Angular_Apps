var app = angular.module('DecisionatorApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider.when("/lobby", {
        controller: "lobbyController",
        templateUrl: "app/views/lobby.html"
    });
    $routeProvider.otherwise({ redirectTo: "/lobby" });
});