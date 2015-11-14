// The app.js will register your available actions you've made

var application = angular.module('application-name',
    ['ui.router', 'application.controllers', 'application.services', 'application.factories', 'application.directives', 'application.config']);

application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.when("", "/test");
    // $urlRouterProvider.otherwise("/test");

    $stateProvider
        .state('test', {
            abstract: false,
            url: '/test',
            templateUrl: 'views/test/test.html',
            controller: 'TestController'
        })
        .state('F1FeederApp', {
            abstract: false,
            url: '/F1',
            templateUrl: 'views/F1/index.html',
            controller: 'driversController'
        })
        .state('test2', {
            abstract: false,
            url: '/test2',
            templateUrl: 'views/test2/test2.html',
            controller: 'Test2Controller',
            resolve: {
                auth: function(LoggedUser) {
                    if (!LoggedUser.isLogged()) {
                        $stateProvider.state('test');
                    }
                }
            }
        });

}]);
//.run(['$http', 'LoggedUser', function($http, LoggedUser) {
//    if (LoggedUser.isLogged()) {
//        $http.defaults.headers.common['X-Session-Header'] = LoggedUser.getToken();
//    }
//}]);

angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services'
]);