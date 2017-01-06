(function () {
    'use strict';

    angular.module('app.localStorage', ['LocalStorageModule'])

        .factory('localStorage', function ($cacheFactory) {
            return $cacheFactory('localStorage');
        })

        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('survey-app');
        })

        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setDefaultToCookie(true);
        });
})();