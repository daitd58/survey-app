(function () {
    'use strict';

    angular.module('app.core')
        .controller('LoginController', function ($http, $rootScope, $location, $state, localStorageService, PageValues, AccountService, NotificationService) {
            var mv = this;

            PageValues.title = 'Đăng nhập';

            mv.signIn = signIn;
            mv.email = '';
            mv.password = '';

            mv.disableSubmit = false;

            var token = localStorageService.get('user_token');

            if (token) {
                return $state.go('welcome');
            }

            function signIn() {
                mv.disableSubmit = true;

                AccountService.login(mv.email, mv.password).then(
                    function (response) {
                        mv.disableSubmit = false;
                        $rootScope.$emit('loginSuccess', response);
                        // $state.go('class');
                        console.log(response);
                        NotificationService.success('Xin chào ' + response.data.name + '!');
                    },
                    function (error) {
                        mv.disableSubmit = false;
                        mv.password = '';
                        NotificationService.error(error.data.message);
                    }
                );
            }
        });
})();