(function () {
    'use strict';

    angular.module('app.services')
        .factory('UserService', UserService);

    function UserService($q, APIService) {
        return {
            getUsers: getUsers,
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser,
            getUser: getUser
        };

        function getUsers() {
            var deferred = $q.defer();

            APIService.makeRequestAuth({
                url: '/user/list',
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
        
        function createUser() {
            
        }
        
        function updateUser() {
            
        }
        
        function deleteUser() {
            
        }
        
        function getUser() {
            
        }
    }
})();