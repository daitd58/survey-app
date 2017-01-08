(function () {
    'use strict';

    angular.module('app.services')
        .factory('UserService', UserService);

    function UserService($q, APIService) {
        return {
            getUsers: getUsers
        };

        function getUsers() {
            var deferred = $q.defer();

            APIService.makeRequestAuth({
                url: '/users',
                method: 'GET'
            }).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (error) {
                    deferred.reject(error);
                }
            );

            return deferred.promise;
        }
    }
})();