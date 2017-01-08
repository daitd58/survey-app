(function () {
    'use strict';

    angular.module('app.core')
        .controller('LoginController', function ($http, $rootScope, $location, $state, StorageService, PageValues, AccountService, NotificationService) {
            var mv = this;

            PageValues.title = 'Đăng nhập';

            mv.signIn = signIn;
            mv.email = '';
            mv.password = '';

            mv.disableSubmit = false;

            var token = StorageService.getToken();

            if (token) {
                return $state.go('welcome');
            }

            function signIn() {
                mv.disableSubmit = true;

                AccountService.login(mv.email, mv.password).then(
                    function (response) {
                        mv.disableSubmit = false;
                        $rootScope.$emit('loginSuccess', response);
                        if( response.data.user_type == 1 )
                            $state.go('users');
                        // if( response.data.user_type == 2 )
                        //     $state.go('')
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