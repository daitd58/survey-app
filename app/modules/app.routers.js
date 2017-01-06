(function () {
    'use strict';

    angular
        .module('app.routes', ['ui.router'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/', '/welcome')
            .otherwise('/');

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'templates/pages/welcome.html',
                controller: 'WelcomeController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/accounts/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('posts', {
                url: '/class',
                views: {
                    '': {
                        templateUrl: 'templates/layouts/master.html'
                    },
                    'sidebar@posts': {
                        templateUrl: 'templates/posts/sidebar.html',
                        controller: 'SidebarController',
                        controllerAs: 'sidebarCtrl'
                    }
                }
            })
    }
})();