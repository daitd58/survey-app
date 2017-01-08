(function () {
    'use strict';

    angular.module('app.core')
        .directive('saNavbar', saNavbar);

    function saNavbar() {
        return {
            templateUrl: 'templates/components/navbar.html',
            restrict: 'A',
            controller: 'NavbarController',
            controllerAs: 'navbarCtrl'
        };
    }
})();