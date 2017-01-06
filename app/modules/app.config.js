(function () {
    'use strict';

    angular
        .module('app.config', ['angular-loading-bar'])
        // .config(configs)
        .run(function ($rootScope, $state, PageValues) {

            $rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
                PageValues.breadcrumbs = [
                    {href: $state.href('class'), title: 'Trang chủ'}
                ];
            });
        });

    // function configs($httpProvider, cfpLoadingBarProvider) {
    //     $httpProvider.interceptors.push('HTTPInterceptor');
    //     cfpLoadingBarProvider.includeSpinner = false;
    // }
})();