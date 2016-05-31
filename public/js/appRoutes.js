angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/clients', {
            templateUrl: 'views/client.html',
            controller: 'ClientController'
        })

        .when('/props', {
            templateUrl: 'views/prop.html',
            controller: 'PropController'
        });

    $locationProvider.html5Mode(true);

}]);
