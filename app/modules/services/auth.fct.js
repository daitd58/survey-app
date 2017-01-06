(function () {
    'use strict';

    angular.module('app.services')
        .factory('AuthService', AuthService);

    function AuthService(StorageService) {
        return {
            isAuthorized: isAuthorization
        };

        function isAuthorization() {
            var token = StorageService.getToken();

            return Boolean(token);
        }
    }
})();