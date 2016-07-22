(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.service('InterceptorService', function($rootScope, $location, $cookies) {

        var service = this;

        service.request = function(config) {
            var access_token = $cookies.authorization;
            if (access_token) {
                config.headers.authorization = access_token;
            }
            return config;
        };

        service.responseError = function(response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        };

    });

})();