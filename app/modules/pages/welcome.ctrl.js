(function () {
    'use strict';

    angular.module('app.core')
        .controller('WelcomeController', function ($scope, $state, localStorageService, $location, PageValues) {
            var token = localStorageService.get('user_token');

            PageValues.title = 'Chào mừng bạn đến với Survey App';

            if (token) {
                $state.go('class');
            }
        });
})();