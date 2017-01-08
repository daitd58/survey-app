(function () {
    'use strict';

    angular.module('app.core')
        .directive('saFooter', saFooter);

    function saFooter() {
        return {
            templateUrl: 'templates/components/footer.html',
            restrict: 'A',
            controller: 'FooterController',
            controllerAs: 'footerCtrl'
        };
    }
})();