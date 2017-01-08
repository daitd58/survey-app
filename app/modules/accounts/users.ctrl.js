(function () {
    'use strict';
    
    angular.module('app.core')
        .controller('UserController', function ($http, UserService, $rootScope, $state, PageValues, NotificationService) {
            this.listUser = [];
            var $this = this;

            PageValues.title = 'Tất cả các lớp môn học';

            PageValues.breadcrumbs = [];

            UserService.getUsers().then(function (response) {
                $this.listUser = response.data;
            }, function (error) {
                NotificationService.error(error.data.message);
            })
        })
})();